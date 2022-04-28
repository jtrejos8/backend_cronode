import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { CustomBreadCrumb } from '../../../components/ui/breadcrumb/index';
import { CustomSpinner } from '../../../components/ui/spinner/styles';
import { useDispatch, useSelector } from 'react-redux';
import  Table  from '../../../components/ui/table/index';
import { startLoadTypeActivities, findTypeActivitie, createTypeActivitie, editTypeActivitie, deleteTypeActivitie } from '../../../redux/actions/typeActivities';
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
  color: '',
}

const FormSchema = yup.object().shape({
  name: yup.string().required('El campo nombre de tipo de actividad es requerido')
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
  { name: 'TIPO DE ACTIVIDADES', link: '/', isLink: true} ,
  { name: 'TIPO DE ACTIVIDADES', link: '/', isLink: false }
];

export const TypeActivitiesScreen = () => {
  const dispatch = useDispatch();

  const { typeActivities, typeActivitie, loading } = useSelector(state => state.allTypeActivities);

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
    setTitle('Agregar tipo de actividad');
    setButtonNameAction("Crear");
  };

  const handleEdit = (e) => {
    let id = e.currentTarget.dataset.id;
    setId(id);
    dispatch(findTypeActivitie(id));
    setTitle('Editar tipo de actividad');
    setButtonNameAction("Editar");
    setEdit(true);
  };

  const handleDelete = async(e) => {
    let id = await e.currentTarget.dataset.id;
    dispatch(deleteTypeActivitie(id));
  };

  const SentTypeActivities = ({ name, type}) => {
    if(edit){
        dispatch(editTypeActivitie(id, name, type));
        setShow(false);
    }else{
      setShow(false);
      dispatch(createTypeActivitie(name, type));
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
        name:'Color',
        selector:'color',
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
    dispatch(startLoadTypeActivities());
    if(typeActivitie){
      setShow(true);
    }
  }, [dispatch, typeActivitie]);
    
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
                    data = { typeActivities }
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
                  initialValues={typeActivitie ? typeActivitie : InitialValues}
                  validationSchema={FormSchema}
                  onSubmit={SentTypeActivities}
                  >
                  {({ errors, touched }) => (
                    <Form id="form">
                      <div className="form-group mb-3">
                        <label htmlFor="name">Tipo de actividades</label>
                          <Field
                            type="text"
                            name="name"
                            placeholder="Tipo de actividades"
                            className={isValid(errors, touched, 'name')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="name"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="color">Color</label>
                          <Field
                            type="color"
                            name="color"
                            placeholder="Color"
                            className={isValid(errors, touched, 'color')}
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