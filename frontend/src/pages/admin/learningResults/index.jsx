import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Table  from '../../../components/ui/table/index';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadlearningResults, findlearningResult, createlearningResult, editlearningResult, deletelearningResult } from '../../../redux/actions/learningResults';
import { Modal, Button  } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { CustomSpinner } from '../../../components/ui/spinner/styles';
import { CustomBreadCrumb } from '../../../components/ui/breadcrumb/index';
import { isValid, ValidateMessage } from '../../../helpers/validate';
import { CustomSelect } from '../../../components/ui/select/index';
import { startLoadCompetencies} from '../../../redux/actions/competencies';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';

const InitialValues = {
    description: '',
    summary: '',
    hours: '',
    projectPhase: '',
    competence: '',
    associatedTrimesters: '',
    trimesterEvaluate: ''
};

const FormSchema = yup.object().shape({
  description: yup.string().required('El campo descripción es requerido'),
  summary: yup.string().required('El campo resúmen es requerido'),
  hours: yup.string().required('El campo horas es requerido'),
  projectPhase: yup.string().required('El campo fase es requerido'),
  associatedTrimesters: yup.string().required('El campo trimestre asociado es requerido'),
  trimesterEvaluate: yup.string().required('El campo trimestre evaluado es requerido'),
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
  { name: 'RESULTADO DE APRENDIZAJE', link: '/', isLink: false }
];

export const LearningResultsScreen = () => {

  const dispatch = useDispatch();
  const { learningResults, learningResult, loading } = useSelector(state => state.allLearningResults);
  const { competencies } = useSelector(state => state.allCompetencies);
  const [ show, setShow ] = useState(false);

  const handleClose = () => {
    if(edit){
      dispatch(findlearningResult(null));
    }
    setShow(false);
  };

  const [ buttonNameAction, setButtonNameAction ] = useState();

  const [ id, setId ] = useState();

  const [ edit, setEdit ] = useState(false);

  const [ title, setTitle ] = useState();

  const getCompetencies = competencies.map(competence => (
    {
      label: competence.description,
      value:competence.id
    }
  ));

  
  const SentlearningResults = ({ description, summary, hours, projectPhase, competence, associatedTrimesters, trimesterEvaluate}) => {
    if(edit){
        dispatch(editlearningResult(id, description, summary, hours, projectPhase, competence, associatedTrimesters, trimesterEvaluate));
        setShow(false);
    }else{
      setShow(false);
      dispatch(createlearningResult(description, summary, hours, projectPhase, competence, associatedTrimesters, trimesterEvaluate));
    }
  };

  const handleShow = () => {
    setShow(true);
    setEdit(false);
    setTitle('Crear resultado');
    setButtonNameAction("Crear");
  };

  const handleEdit = (e) => {
    let id = e.currentTarget.dataset.id;
    setId(id);
    dispatch(findlearningResult(id));
    setTitle('Editar resultado');
    setButtonNameAction("Editar");
    setEdit(true);
  };

  const handleDelete = async(e) => {
    let id = await e.currentTarget.dataset.id;
    dispatch(deletelearningResult(id));
  };
  

  const columns = [
    {
        name:'Descricpcion',
        selector:'description',
        sortable: true,
        center: true,
        grow: 2,
    },
    {
        name:'Ressumen',
        selector:'summary',
        sortable: true,
        center: true,
        grow: 2,
    },
    {
        name:'Horas',
        selector:'hours',
        sortable: true,
        center: true,
    },
    {
        name:'Fase del proyecto',
        selector:'projectPhase',
        sortable: true,
        center: true,
    },
    {
        name:'Competencia',
        selector:'competence.description',
        sortable: true,
        grow: 2,
    },
    {
        name:'Trimestres a evaluar',
        selector:'trimesterEvaluate',
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
    dispatch(startLoadlearningResults());
    dispatch(startLoadCompetencies());
    if(learningResult){
      setShow(true);
    }
  }, [dispatch, learningResult]);

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
                  data = { learningResults.learningResults }
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
                  initialValues={learningResult ? learningResult : InitialValues}
                  validationSchema={FormSchema}
                  onSubmit={SentlearningResults}
                  >
                  {({ errors, touched }) => (
                    <Form id="form">
                      <div className="form-group mb-3">
                        <label htmlFor="description">Descripcion</label>
                          <Field
                            type="text"
                            name="description"
                            placeholder="Descripcion"
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
                            placeholder="Resúmen"
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
                        <label htmlFor="projectPhase">Fase del proyecto</label>
                          <Field
                            type="text"
                            name="projectPhase"
                            placeholder="Fase del proyecto"
                            className={isValid(errors, touched, 'projectPhase')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="projectPhase"
                          />
                      </div>

                      <div className="form-group mb-3">
                        <label htmlFor="competence.description">Competencia</label>
                          <Field 
                            name={'competence.id'}
                            component={CustomSelect} 
                            options={getCompetencies}
                          />
                      </div>

                      <div className="form-group mb-3">
                        <label htmlFor="associatedTrimesters">Trimestre asociado</label>
                          <Field
                            type="text"
                            name="associatedTrimesters"
                            placeholder="Trimestre asociado"
                            className={isValid(errors, touched, 'associatedTrimesters')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="associatedTrimesters"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="trimesterEvaluate">Trimestre evaluado</label>
                          <Tooltip title="Los trimestres se deben separar por comas &nbsp;
                          " placement="right">
                          <HelpIcon className="ml-1" fontSize="small"/>
                          </Tooltip>
                          <Field
                            type="text"
                            name="trimesterEvaluate"
                            placeholder="Trimestre evaluado"
                            className={isValid(errors, touched, 'trimesterEvaluate')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="trimesterEvaluate"
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