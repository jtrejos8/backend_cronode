import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { CustomBreadCrumb } from '../../../components/ui/breadcrumb/index';
import { CustomSpinner } from '../../../components/ui/spinner/styles';
import { useDispatch, useSelector } from 'react-redux';
import  Table  from '../../../components/ui/table/index';
import { startLoadPositions, findPosition, createPosition, editPosition, deletePosition } from '../../../redux/actions/positions';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button  } from 'react-bootstrap';
import { isValid, ValidateMessage } from '../../../helpers/validate';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { CustomSelect } from '../../../components/ui/select/index';

const InitialValues = {
  name: '',
  type: '',
}

const FormSchema = yup.object().shape({
  name: yup.string().required('El campo nombre de posicion es requerido'),
  type: yup.string().required('El campo tipo es requerido'),
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
  { name: 'UBICACIONES', link: '/', isLink: true} ,
  { name: 'PARAMETRIZACION', link: '/', isLink: false }
];

export const PositionsScreen = () => {
  const dispatch = useDispatch();

  const { positions, position, loading } = useSelector(state => state.allPositions);

  const [ show, setShow ] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const [ buttonNameAction, setButtonNameAction ] = useState();

  const [ id, setId ] = useState();

  const [ edit, setEdit ] = useState(false);

  const [ title, setTitle ] = useState();

  const types = [
    {
      label: "Instructor",
      value: "Instructor",
    },
    {
      label: "Administrativo",
      value: "Administrativo",
    },
    {
      label: "Apoyo",
      value: "Apoyo",
    },
    {
      label: "Subdirector",
      value: "Subdirector",
    },
  ];

  const handleShow = () => {
    setShow(true);
    setEdit(false);
    setTitle('Agregar posicion');
    setButtonNameAction("Crear");
  };

  const handleEdit = (e) => {
    let id = e.currentTarget.dataset.id;
    setId(id);
    dispatch(findPosition(id));
    setTitle('Editar posicion');
    setButtonNameAction("Editar");
    setEdit(true);
  };

  const handleDelete = async(e) => {
    let id = await e.currentTarget.dataset.id;
    dispatch(deletePosition(id));
  };

  const SentPositions = ({ name, type}) => {
    if(edit){
        dispatch(editPosition(id, name, type));
        setShow(false);
    }else{
      setShow(false);
      dispatch(createPosition(name, type));
    }
  };

  const columns = [
    {
        name:'Nombre',
        selector:'name',
        sortable: true,
        center: true,
        grow: 3,
    },
    {
        name:'Tipo',
        selector:'type',
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
    dispatch(startLoadPositions());
    if(position){
      setShow(true);
    }
  }, [dispatch, position]);
    
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
                    data = { positions }
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
                  initialValues={position ? position : InitialValues}
                  validationSchema={FormSchema}
                  onSubmit={SentPositions}
                  >
                  {({ errors, touched }) => (
                    <Form id="form">
                      <div className="form-group mb-3">
                        <label htmlFor="name">Posiciones</label>
                          <Field
                            type="text"
                            name="name"
                            placeholder="Posiciones"
                            className={isValid(errors, touched, 'name')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="name"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="type">Zonas</label>
                          <Field 
                            name={'type'}
                            component={CustomSelect} 
                            options={types}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="type"
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