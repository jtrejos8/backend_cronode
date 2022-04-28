import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Table  from '../../../components/ui/table/index';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadAmbients, createAmbient, findAmbient, editAmbient, deleteAmbient } from '../../../redux/actions/ambients';
import { Modal, Button  } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { CustomSpinner } from '../../../components/ui/spinner/styles';
import { CustomBreadCrumb } from '../../../components/ui/breadcrumb/index';
import { isValid, ValidateMessage } from '../../../helpers/validate';
import { CustomSelect } from '../../../components/ui/select/index';

const InitialValues = {
  name: '',
  state: '',
  usability: '',
};

const FormSchema = yup.object().shape({
  name: yup.string().required('El campo nombre es requerido'),
  state: yup.string().required('El campo estado es requerido'),
  usability: yup.string().required('El campo usabilidad es requerido')
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
  { name: 'AMBIENTES', link: '/ambientes', isLink: false }
];

const options = [
  {value:'activo', label:'Activo'},
  {value:'inactivo', label:'Inactivo'}
];

export const AmbientsScreen = () => {

  const dispatch = useDispatch();
  const { ambients, ambient, loading } = useSelector(state => state.allAmbients);
  const [ edit, setEdit ] = useState(false);
  const [ show, setShow ] = useState(false);
  const [ id, setId ] = useState();
  const [ title, setTitle ] = useState();
  const [ buttonAction, setButtonAction ] = useState();
  const handleClose = () => {
    if(edit){
      dispatch(findAmbient(null));
    }
    setShow(false);
  };

  const SentAmbients = ({ name, state, usability }) => {
    if(edit){
      dispatch(editAmbient(id, name, state, usability));
      dispatch(findAmbient(null));
      setShow(false);
    }else{
      setShow(false);
      dispatch(createAmbient(name, state, usability));
    }
  };

  const handleShow = () => {
    setShow(true);
    setEdit(false);
    setTitle('Crear ambiente');
    setButtonAction("Crear");
  };

  const handleEdit = (e) => {
    let id = e.currentTarget.dataset.id;
    setId(id);
    dispatch(findAmbient(id));
    setTitle('Editar ambiente');
    setButtonAction("Editar");
    setEdit(true);
  };

  const handleDelete = async(e) => {
    let id = await e.currentTarget.dataset.id;
    dispatch(deleteAmbient(id));
  };

  const columns = [
    {
        name:'NOMBRE',
        selector:'name',
        sortable: true,
        center: true,
        grow: 3,
    },
    {
        name:'ESTADO',
        selector:'state',
        sortable: true
    },
    {
        name:'USABILIDAD',
        selector:'usability',
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
    dispatch(startLoadAmbients());
    if(ambient){
      setShow(true);
    }
  }, [dispatch, ambient]);

  const clases = useStyle();

  if (loading) {
    return (
      <CustomSpinner animation="border" />
    )
  }else{
      return (
        <>
        <AdminLayout>
        <div className="container">
            <div className="row justify-content-between mt-3">
              <div>
                <CustomBreadCrumb routes={routes}/>
              </div>
              <div>
                <Button variant="outline-secondary" className={clases.buttonAdd} onClick={handleShow}>
                  Crear<AddIcon />
                </Button>
              </div>
            </div>
            <div className="row mt-2">
                <div className="table-responsive">
                <Table 
                  data = { ambients }
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
                initialValues={ambient ? ambient : InitialValues}
                validationSchema={FormSchema}
                onSubmit={SentAmbients}
                >
                {({ errors, touched }) => (
                  <Form id="form">
                    <div className="form-group mb-3">
                      <label htmlFor="name">Nombre</label>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Ambiente Sena"
                          className={isValid(errors, touched, 'name')}
                        />
                        <ValidateMessage
                          errors={errors}
                          touched={touched}
                          field="name"
                        />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="state">Estado</label>
                      <Field 
                        name={'state'} 
                        component={CustomSelect} 
                        options={options}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="usability">Usabilidad</label>
                        <Field
                          type="text"
                          name="usability"
                          placeholder="Usabilidad del ambiente"
                          className={isValid(errors, touched, 'usability')}
                        />
                        <ValidateMessage
                          errors={errors}
                          touched={touched}
                          field="usability"
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
              <Button type="submit" form="form" variant="outline-success">{buttonAction}</Button>
            </Modal.Footer>
          </Modal>
        </AdminLayout>
        </>
      );
  }
};
