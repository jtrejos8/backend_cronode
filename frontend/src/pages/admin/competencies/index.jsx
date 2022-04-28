import React, { useEffect, useState} from 'react';
import * as yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Table  from '../../../components/ui/table/index';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadCompetencies, findCompetencie, createCompetencie, editCompetencie, deleteCompetencie } from '../../../redux/actions/competencies';
import { Modal, Button  } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { CustomSpinner } from '../../../components/ui/spinner/styles';
import { CustomBreadCrumb } from '../../../components/ui/breadcrumb/index';
import { isValid, ValidateMessage } from '../../../helpers/validate';
import { CustomSelect } from '../../../components/ui/select/index';
import { startLoadFormationPrograms } from '../../../redux/actions/formationPrograms';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';

const InitialValues = {
  code: '',
  description: '',
  summary: '',
  formationProgram: '',
  hours: ''
};

const FormSchema = yup.object().shape({
  code: yup.string().required('El campo codigó es requerido'),
  description: yup.string().required('El campo descripción es requerido'),
  summary: yup.string().required('El campo resúmen es requerido'),
  hours: yup.string().required('El campo horas es requerido'),
});


const useStyle = makeStyles({
  buttonAdd: {backgroundColor: '#93C54B',color: 'white',border: 'none'},
  buttonEdit: {backgroundColor: 'white',color: '#93C54B',border: '1px solid #93C54B',marginRight: '2px', padding: '2px', borderRadius: '5px',
  '&:hover': {
    background: "#93C54B",
 }},
  buttonDelete: {backgroundColor: 'white',color: '#d9534f',border: '1px solid #d9534f', padding: '2px', borderRadius: '5px',
  '&:hover': {
    background: "#d9534f",
 }}
});

const routes = [
  { name: 'INICIO', link: '/', isLink: true} ,
  { name: 'PROGRAMAS DE FORMACIÓN', link: '/', isLink: true} ,
  { name: 'COMPETENCIAS', link: '/', isLink: false }
];

export const CompetenciesScreen = () => {

  const dispatch = useDispatch();
  const { competencies, competencie, loading } = useSelector(state => state.allCompetencies);
  const { formationPrograms } = useSelector(state => state.allFormationPrograms);
  const [ show, setShow ] = useState(false);

  const handleClose = () => {
    if(edit){
      dispatch(findCompetencie(null));
    }
    setShow(false);
  };

  const [ buttonNameAction, setButtonNameAction ] = useState();

  const [ id, setId ] = useState();

  const [ edit, setEdit ] = useState(false);

  const [ title, setTitle ] = useState();

  const getFormationPrograms = formationPrograms.map(formationProgram => (
    {
      label: formationProgram.name,
      value:formationProgram.id
    }
  ));

  
  const SentCompetencies = ({ code, description, summary, formationProgram, hours }) => {
    if(edit){
        dispatch(editCompetencie(id, code, description, summary, formationProgram, hours));
        setShow(false);
    }else{
      setShow(false);
      dispatch(createCompetencie(code, description, summary, formationProgram, hours));
    }
  };

  const handleShow = () => {
    setShow(true);
    setEdit(false);
    setTitle('Crear competencia');
    setButtonNameAction("Crear");
  };

  const handleEdit = (e) => {
    let id = e.currentTarget.dataset.id;
    setId(id);
    dispatch(findCompetencie(id));
    setTitle('Editar competencia');
    setButtonNameAction("Editar");
    setEdit(true);
  };

  const handleDelete = async(e) => {
    let id = await e.currentTarget.dataset.id;
    dispatch(deleteCompetencie(id));
  };
  

  const columns = [
    {
        name:'Código',
        selector:'code',
        sortable: true,
        center: true,
    },
    {
        name:'Descripción',
        selector:'description',
        sortable: true,
        center: true,
        grow: 3,
    },
    {
        name:'Resúmen',
        selector:'summary',
        sortable: true,
        center: true,
        grow: 3,
    },
    {
      name:'Programa de formación',
      selector:'formationProgram.name',
      sortable: true,
      center: true,
      grow: 3,
    },
    {
      name:'Horas',
      selector:'hours',
      sortable: true
    },
    {
      name: 'OPCIONES',
      selector: 'options',
      button: true,
      cell: row => (
      <>
      <EditIcon  className={clases.buttonEdit} data-id={row.id} onClick={handleEdit}/>
      <DeleteIcon className={clases.buttonDelete} data-id={row.id} onClick={handleDelete}/>
      </>
    )}
  ];

  useEffect(() => {
    dispatch(startLoadCompetencies())
    dispatch(startLoadFormationPrograms());
    if(competencie){
      setShow(true);
    }
  }, [dispatch, competencie]);

  const clases = useStyle();

  if (loading) {
    return (
      <CustomSpinner animation="border" />
    )
  }else{
    return (
      <AdminLayout>
        <div className="container">
          <div className="row justify-content-between mt-3">
            <div>
              <CustomBreadCrumb routes={routes}/>
            </div>
            <div>
              <Button variant="outline-secondary" className={clases.buttonAdd} onClick={handleShow}>
                Crear <AddIcon />
              </Button>
            </div>
          </div>
          <div className="row mt-2">
              <div className="table-responsive">
                <Table 
                  data = { competencies }
                  columns = { columns }
                />
              </div>
          </div>
        </div>
        <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Formik
                  initialValues={competencie ? competencie : InitialValues}
                  validationSchema={FormSchema}
                  onSubmit={SentCompetencies}
                  >
                  {({ errors, touched }) => (
                    <Form id="form">
                      <div className="form-group mb-3">
                        <label htmlFor="code">Código</label>
                          <Tooltip title="Corresponde al código de la competencia que &nbsp;
                          se encuentra en el programa de formación" placement="right">
                          <HelpIcon className="ml-1" fontSize="small"/>
                          </Tooltip>
                          <Field
                            type="text"
                            name="code"
                            placeholder="Código de la competencia"
                            className={isValid(errors, touched, 'code')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="code"
                          />
                      </div>
  
                      <div className="form-group mb-3">
                        <label htmlFor="description">Descripción</label>
                          <Field
                            type="text"
                            name="description"
                            placeholder="Descripción de la competencia"
                            className={isValid(errors, touched, 'description')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="description"
                          />
                      </div>
  
                      <div className="form-group mb-3">
                        <label htmlFor="summary">Resúmen</label>
                          <Field
                            type="text"
                            name="summary"
                            placeholder="Resúmen de la competencia"
                            className={isValid(errors, touched, 'summary')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="summary"
                          />
                      </div>
                  
                      <div className="form-group mb-3">
                        <label htmlFor="hours">Horas</label>
                          <Field
                            type="text"
                            name="hours"
                            placeholder="0"
                            className={isValid(errors, touched, 'hours')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="hours"
                          />
                      </div>

                      <div className="form-group mb-3">
                        <label htmlFor="formationProgram.name">Programa de formación</label>
                          <Field 
                            name={'formationProgram.id'}
                            component={CustomSelect} 
                            options={getFormationPrograms}
                          />
                      </div>
                    </Form>
                  )}
                </Formik>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button type="submit" form="form" variant="outline-success">{buttonNameAction}</Button>
              </Modal.Footer>
          </Modal>
      </AdminLayout>
    );
  }
};