import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { CustomBreadCrumb } from '../../../components/ui/breadcrumb/index';
import { CustomSpinner } from '../../../components/ui/spinner/styles';
import { useDispatch, useSelector } from 'react-redux';
import  Table  from '../../../components/ui/table/index';
import { startLoadGroups, findGroup, createGroup, editGroup, deleteGroup } from '../../../redux/actions/groups';
import { startLoadModalities} from '../../../redux/actions/modalities';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button  } from 'react-bootstrap';
import { isValid, ValidateMessage } from '../../../helpers/validate';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { startLoadUsers } from '../../../redux/actions/users';
import { startLoadFormationPrograms } from '../../../redux/actions/formationPrograms';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { CustomSelect } from '../../../components/ui/select/index';

const InitialValues = {
    codeTab: '',
    modality: '',
    quantityLearners: '',
    activeLearners: '',
    electiveStartDate: '',
    electiveEndDate: '',
    practiceStartDate: '',
    practiceEndDate: '',
    offer: '',
    manager: '',
    formationProgram: '',
    learner: '',
    groupState: '',
}

const FormSchema = yup.object().shape({
    codeTab: yup.string().required('El campo codigo de grupo es requerido'),
  });

  const useStyle = makeStyles({
    noRecords:{textAlign:'center', color:'#D8CDCD'},
    buttonAdd: {backgroundColor: '#93C54B',color: 'white',border: 'none'},
    buttonEdit: {backgroundColor: 'white',color: '#93C54B',border: '1px solid #93C54B',marginRight: '20px', padding: '5px', borderRadius: '5px',
    '&:hover': {
      background: "#93C54B",
  }},
    buttonDelete: {backgroundColor: 'white',color: '#d9534f',border: '1px solid #d9534f', padding: '5px', borderRadius: '5px',
    '&:hover': {
      background: "#d9534f",
  }}
});

const routes = [
    { name: 'INICIO', link: '/', isLink: true} ,
    { name: 'PROGRAMAS DE FORMACIÓN', link: '/', isLink: true} ,
    { name: 'GRUPOS', link: '/', isLink: false }
];

export const GroupsScreen = () => {

    const dispatch = useDispatch();

    const { groups, group, loading } = useSelector(state => state.allGroups);

    const { modalities } = useSelector(state => state.allModalities);

    const { formationPrograms } = useSelector(state => state.allFormationPrograms);

    const [ show, setShow ] = useState(false);

    const handleClose = () => {
        if(edit){
          dispatch(findGroup(null));
        }
        setShow(false);
      };
  
    const [ buttonNameAction, setButtonNameAction ] = useState();
  
    const [ id, setId ] = useState();
  
    const [ edit, setEdit ] = useState(false);
  
    const [ title, setTitle ] = useState();

    const getModalities = modalities.map(modality => (
        {
            label: modality.name,
            value: modality.id
        }
    ));


    const getFormationPrograms = formationPrograms.map(formationProgram => (
        {
            label: formationProgram.name,
            value: formationProgram.id
        }
    ));

    const offers = [
        {
          label: "Abierta",
          value: "Abierta",
        },
        {
          label: "Cerrada (especial)",
          value: "Cerrada",
        },
      ];

    const learners = [
        {
          label: "(123443556) Aprendiz prueba",
          value: "Aprendiz prueba",
        },
      ];

    const groupStates = [
        {
          label: "Activo",
          value: 0,
        },
        {
          label: "Inactivo",
          value: 1,
        },
      ];

    const SentGroups = ({ codeTab, modality, quantityLearners, activeLearners, electiveStartDate, electiveEndDate, practiceStartDate, practiceEndDate, offer, manager, formationProgram, learner, groupState}) => {
        if(edit){
            dispatch(editGroup(id, codeTab, modality, quantityLearners, activeLearners, electiveStartDate, electiveEndDate, practiceStartDate, practiceEndDate, offer, manager, formationProgram, learner, groupState ));
            setShow(false);
        }else{
          setShow(false);
          dispatch(createGroup(codeTab, modality, quantityLearners, activeLearners, electiveStartDate, electiveEndDate, practiceStartDate, practiceEndDate, offer, manager, formationProgram, learner, groupState ));
        }
      };
      
      const handleShow = () => {
        setShow(true);
        setEdit(false);
        setTitle('Crear grupo');
        setButtonNameAction("Crear");
      };
    
      const handleEdit = (e) => {
        let id = e.currentTarget.dataset.id;
        setId(id);
        dispatch(findGroup(id));
        setTitle('Editar grupo');
        setButtonNameAction("Editar");
        setEdit(true);
      };
    
      const handleDelete = async(e) => {
        let id = await e.currentTarget.dataset.id;
        dispatch(deleteGroup(id));
      };

    const columns = [
        {
            name:'ID',
            selector:'codeTab',
            sortable: true,
            center: true,
            grow: 2,
        },
        {
            name:'Programa de formación',
            selector:'formationProgram.name',
            sortable: true,
            center: true,
            grow: 2,
        },
        {
            name:'Jefe grupo',
            selector:'manager.username',
            sortable: true,
            center: true,
            grow: 2,
        },
        {
            name:'Número de aprendices',
            selector:'quantityLearners',
            sortable: true,
            center: true,
        },
        {
            name:'Estado',
            selector:'groupState',
            sortable: true
        },
        {
            name:'Modalidad',
            selector:'modality.name',
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
        dispatch(startLoadGroups());
        dispatch(startLoadModalities());
        dispatch(startLoadUsers());
        dispatch(startLoadFormationPrograms());
        if(group){
            setShow(true);
          }
        }, [dispatch, group]);
        
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
                    data = { groups.groups }
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
                  initialValues={group ? group : InitialValues}
                  validationSchema={FormSchema}
                  onSubmit={SentGroups}
                  >
                  {({ errors, touched }) => (
                    <Form id="form">
                      <div className="form-group mb-3">
                        <label htmlFor="code">Id del programa</label>
                          <Field
                            type="text"
                            name="codeTab"
                            placeholder="Id del programa"
                            className={isValid(errors, touched, 'codeTab')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="codeTab"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="modality.name">Modalidad</label>
                          <Field 
                            name={'modality.id'}
                            component={CustomSelect} 
                            options={getModalities}
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="quantityLearners">Número de aprendices</label>
                          <Field
                            type="number"
                            name="quantityLearners"
                            placeholder="Número de aprendices"
                            className={isValid(errors, touched, 'quantityLearners')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="quantityLearners"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="activeLearners">Número de activos</label>
                          <Field
                            type="number"
                            name="activeLearners"
                            placeholder="Número de activos"
                            className={isValid(errors, touched, 'activeLearners')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="activeLearners"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="electiveStartDate">Fecha inicio etapa electiva</label>
                          <Field
                            type="date"
                            name="electiveStartDate"
                            placeholder="Fecha inicio etapa electiva"
                            className={isValid(errors, touched, 'electiveStartDate')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="electiveStartDate"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="electiveEndDate">Fecha fin etapa electiva</label>
                          <Field
                            type="date"
                            name="electiveEndDate"
                            placeholder="Fecha inicio etapa electiva"
                            className={isValid(errors, touched, 'electiveEndDate')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="electiveEndDate"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="practiceStartDate">Fecha inicio etapa practica</label>
                          <Field
                            type="date"
                            name="practiceStartDate"
                            placeholder="Fecha inicio etapa electiva"
                            className={isValid(errors, touched, 'practiceStartDate')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="practiceStartDate"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="practiceEndDate">Fecha fin etapa practica</label>
                          <Field
                            type="date"
                            name="practiceEndDate"
                            placeholder="Fecha inicio etapa electiva"
                            className={isValid(errors, touched, 'practiceEndDate')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="practiceEndDate"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="manager.username">Jefe de grupo</label>
                          <Field 
                            name={'manager.id'}
                            component={CustomSelect} 
                            options={getFormationPrograms}
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="offer">Ofertas</label>
                          <Field 
                            name={'offer'}
                            component={CustomSelect} 
                            options={offers}
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="formationProgram.name">Programas</label>
                          <Field 
                            name={'formationProgram.id'}
                            component={CustomSelect}
                            options={getFormationPrograms}
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="groupState">Estado del grupo</label>
                          <Field 
                            name={'groupState'}
                            component={CustomSelect}
                            options={groupStates}
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="learner">Nombre aprendiz</label>
                          <Field 
                            name={'learner'}
                            component={CustomSelect}
                            options={learners}
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