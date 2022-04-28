import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { CustomBreadCrumb } from '../../../components/ui/breadcrumb/index';
import { CustomSpinner } from '../../../components/ui/spinner/styles';
import { useDispatch, useSelector } from 'react-redux';
import  Table  from '../../../components/ui/table/index';
import { startLoadProgramations, findProgramation, createProgramation, editProgramation, deleteProgramation } from '../../../redux/actions/programations';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button  } from 'react-bootstrap';
import { isValid, ValidateMessage } from '../../../helpers/validate';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { startLoadMunicipalities } from '../../../redux/actions/municipalities';
import { startLoadGroups} from '../../../redux/actions/groups';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { CustomSelect } from '../../../components/ui/select/index';

const InitialValues = {
    startDate: '',
    endDate: '',
    trimester: '',
    group: '',
    municipality: '',
    isActive: ''
}

const FormSchema = yup.object().shape({
    startDate: yup.string().required('El campo nombre de posicion es requerido'),
    endDate: yup.string().required('El campo tipo es requerido'),
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
  { name: 'PROGRAMACIONES', link: '/', isLink: true} ,
  { name: 'PROGRAMACIONES', link: '/', isLink: false }
];

export const ProgramationsScreen = () => {
  const dispatch = useDispatch();

  const { programations, programation, loading } = useSelector(state => state.allProgramations);
  const { groups } = useSelector(state => state.allGroups);
  const { municipalities } = useSelector(state => state.allMunicipalities);

  const [ show, setShow ] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const [ buttonNameAction, setButtonNameAction ] = useState();

  const [ id, setId ] = useState();

  const [ edit, setEdit ] = useState(false);

  const [ title, setTitle ] = useState();

  const getGroups = groups.map(group => (
    {
      label: group.codeTab + (group['formationProgram'].name.split("-")[1]),
      value: group.id
    }
  ));

  const getMunicipalities = municipalities.map(municipality => (
    {
      label: municipality.name,
      value: municipality.id
    }
  ));

  const handleShow = () => {
    setShow(true);
    setEdit(false);
    setTitle('Agregar programacion');
    setButtonNameAction("Crear");
  };

  const handleEdit = (e) => {
    let id = e.currentTarget.dataset.id;
    setId(id);
    dispatch(findProgramation(id));
    setTitle('Editar programacion');
    setButtonNameAction("Editar");
    setEdit(true);
  };

  const handleDelete = async(e) => {
    let id = await e.currentTarget.dataset.id;
    dispatch(deleteProgramation(id));
  };

  const SentProgramations = ({ startDate, endDate}) => {
    if(edit){
        dispatch(editProgramation(id, startDate, endDate));
        setShow(false);
    }else{
      setShow(false);
      dispatch(createProgramation(startDate, endDate));
    }
  };

  const columns = [
    {
        name:'Id grupo',
        selector:'group.codeTab',
        sortable: true,
        center: true,
    },
    {
        name:'Municipio',
        selector:'municipality.name',
        sortable: true,
        center: true,
    },
    {
        name:'Trimestre',
        selector:'trimester',
        sortable: true,
        center: true,
    },
    {
        name:'Fecha inicio',
        selector:'startDate',
        sortable: true,
        center: true,
        cell: programations => (
          <>
              {(programations.startDate !== null) ? programations.startDate.split('T01:47:47.000Z') : 'No hay fecha de registro'}
          </>
          )
    },
    {
        name:'Fecha fin',
        selector:'endDate',
        sortable: true,
        center: true,
        cell: programations => (
          <>
              {(programations.endDate !== null) ? programations.endDate.split('T05:00:00.000Z') : 'No hay fecha de registro'}
          </>
          )
    },
    {
        name:'Estado',
        selector:'isActive',
        sortable: true,
        center: true,
    },
    {
        name: 'OPCIONES',
        selector: 'options',
        button: true,
        cell: row => (
    <>
    <EditIcon className={clases.buttonEdit} data-id={row.id} onClick={handleEdit}/>
    <DeleteIcon className={clases.buttonDelete} data-id={row.id} onClick={handleDelete}/>
    </>
    )}
  ];

  useEffect(() => {
    dispatch(startLoadProgramations());
    dispatch(startLoadMunicipalities());
    dispatch(startLoadGroups());
    if(programation){
      setShow(true);
    }
  }, [dispatch, programation]);
    
  const clases = useStyle();
  if (loading) {
    return (
        <CustomSpinner animation="border" />
    )
    }else{
    return (
        <AdminLayout>
        <div className="container">
          {console.log(getGroups)}
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
                    data = { programations }
                    columns = { columns }
                />
                </div>
            </div>
        </div>
        {/* Modal Create */}
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
                  initialValues={programation ? programation : InitialValues}
                  validationSchema={FormSchema}
                  onSubmit={SentProgramations}
                  >
                  {({ errors, touched }) => (
                    <Form id="form">
                      <div className="form-group mb-3">
                        <label htmlFor="startDate">Fecha inicio</label>
                          <Field
                            type="date"
                            name="startDate"
                            placeholder="Fecha inicio"
                            className={isValid(errors, touched, 'startDate')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="startDate"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="endDate">Fecha Fin</label>
                          <Field
                            type="date"
                            name="endDate"
                            placeholder="Fecha Fin"
                            className={isValid(errors, touched, 'endDate')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="endDate"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="trimester">Trimestre</label>
                          <Field
                            type="number"
                            name="trimester"
                            placeholder="Trimestre"
                            className={isValid(errors, touched, 'trimester')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="trimester"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="group.name">Grupos</label>
                          <Field 
                            name={'group.id'}
                            component={CustomSelect}
                            options={getGroups}
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="municipality.name">Municipios</label>
                          <Field 
                            name={'municipality.id'}
                            component={CustomSelect} 
                            options={getMunicipalities}
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="isActive">Estado</label>
                          <Field
                            type="number"
                            name="isActive"
                            placeholder="Estado"
                            className={isValid(errors, touched, 'isActive')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="isActive"
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