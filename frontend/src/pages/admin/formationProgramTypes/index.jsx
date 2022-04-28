import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { CustomBreadCrumb } from '../../../components/ui/breadcrumb/index';
import { CustomSpinner } from '../../../components/ui/spinner/styles';
import { useDispatch, useSelector } from 'react-redux';
import  Table  from '../../../components/ui/table/index';
import { startLoadFormationProgramTypes, findFormationProgramType, createFormationProgramType, editFormationProgramType, deleteFormationProgramType } from '../../../redux/actions/formationProgramTypes';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button  } from 'react-bootstrap';
import { isValid, ValidateMessage } from '../../../helpers/validate';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const InitialValues = {
  name: '',
  electiveMonths: '',
  practiceMonths: ''
}

const FormSchema = yup.object().shape({
  name: yup.string().required('El campo nombre de tipos de programas es requerido'),
  electiveMonths: yup.string().required('El campo meses electivos es requerido'),
  practiceMonths: yup.string().required('El campo meses practicos es requerido'),
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
  { name: 'TIPOS DE PROGRAMAS DE FORMACIÓN', link: '/', isLink: false }
];

export const FormationProgramTypesScreen = () => {
  const dispatch = useDispatch();

  const { formationProgramTypes, formationProgramType, loading } = useSelector(state => state.allFormationProgramTypes);

  const [ show, setShow ] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const [ buttonNameAction, setButtonNameAction ] = useState();

  const [ id, setId ] = useState();

  const [ edit, setEdit ] = useState(false);

  const [ title, setTitle ] = useState();

  const handleShow = () => {
    setShow(true);
    setEdit(false);
    setTitle('Agregar tipos de programas de formación');
    setButtonNameAction("Crear");
  };

  const handleEdit = (e) => {
    let id = e.currentTarget.dataset.id;
    setId(id);
    dispatch(findFormationProgramType(id));
    setTitle('Editar tipos de programas de formación');
    setButtonNameAction("Editar");
    setEdit(true);
  };

  const handleDelete = async(e) => {
    let id = await e.currentTarget.dataset.id;
    dispatch(deleteFormationProgramType(id));
  };

  const SentFormationProgramTypes = ({ name, electiveMonths, practiceMonths}) => {
    if(edit){
        dispatch(editFormationProgramType(id, name, electiveMonths, practiceMonths));
        setShow(false);
    }else{
      setShow(false);
      dispatch(createFormationProgramType(name, electiveMonths, practiceMonths));
    }
  };

  const columns = [
    {
        name:'Programa de formacion',
        selector:'name',
        sortable: true,
        center: true,
        grow: 3,
    },
    {
        name:'Meses electivos',
        selector:'electiveMonths',
        sortable: true,
        center: true,
        grow: 3,
    },
    {
        name:'Meses practicos',
        selector:'practiceMonths',
        sortable: true,
        center: true,
        grow: 3,
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
    dispatch(startLoadFormationProgramTypes());
    if(formationProgramType){
      setShow(true);
    }
  }, [dispatch, formationProgramType]);
    
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
                    data = { formationProgramTypes }
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
                  initialValues={formationProgramType ? formationProgramType : InitialValues}
                  validationSchema={FormSchema}
                  onSubmit={SentFormationProgramTypes}
                  >
                  {({ errors, touched }) => (
                    <Form id="form">
                      <div className="form-group mb-3">
                        <label htmlFor="name">Programas de formacion</label>
                          <Field
                            type="text"
                            name="name"
                            placeholder="Programas de foramcion"
                            className={isValid(errors, touched, 'name')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="name"
                          />
                      </div>
                        <div className="form-group mb-3">
                            <label htmlFor="electiveMonths">Meses electivos</label>
                            <Field
                                type="number"
                                name="electiveMonths"
                                placeholder="Meses electivos"
                                className={isValid(errors, touched, 'electiveMonths')}
                            />
                            <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="electiveMonths"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="practiceMonths">Meses practicos</label>
                            <Field
                                type="number"
                                name="practiceMonths"
                                placeholder="Meses practicos"
                                className={isValid(errors, touched, 'practiceMonths')}
                            />
                            <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="practiceMonths"
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