import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { CustomBreadCrumb } from '../../../components/ui/breadcrumb/index';
import { CustomSpinner } from '../../../components/ui/spinner/styles';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadRols, findRol, createRol, editRol, deleteRol } from '../../../redux/actions/rols';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button  } from 'react-bootstrap';
import { isValid, ValidateMessage } from '../../../helpers/validate';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonMaterial from '@material-ui/core/Button';
import { CustomCard } from '../../../components/ui/card/styles';

const InitialValues = {
  name: '',
}

const FormSchema = yup.object().shape({
  name: yup.string().required('El campo nombre de rol es requerido'),
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
  { name: 'PARAMETRIZACION', link: '/', isLink: true} ,
  { name: 'ROLES', link: '/', isLink: false }
];

export const RolsScreen = () => {
  const dispatch = useDispatch();

  const { rols, rol, loading } = useSelector(state => state.allRols);

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
    setTitle('Agregar rol');
    setButtonNameAction("Crear");
  };

  const handleEdit = (e) => {
    let id = e.currentTarget.dataset.id;
    setId(id);
    dispatch(findRol(id));
    setTitle('Editar rol');
    setButtonNameAction("Editar");
    setEdit(true);
  };

  const handleDelete = async(e) => {
    let id = await e.currentTarget.dataset.id;
    dispatch(deleteRol(id));
  };

  const SentRols = ({ name }) => {
    if(edit){
        dispatch(editRol(id, name));
        setShow(false);
    }else{
      setShow(false);
      dispatch(createRol(name));
    }
  };


  useEffect(() => {
    dispatch(startLoadRols());
    if(rol){
      setShow(true);
    }
  }, [dispatch, rol]);
    
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
            <div className="row mt-4 justify-content-center">
            {rols.length > 0 ? rols.map(rol => (
              <CustomCard className="col-3 mr-3 mb-5" key={rol.id}>
                <h5 className="text-center mt-4 mb-4">{rol.name}</h5>
                <CustomCard.Body>
                  <ButtonMaterial
                    variant="contained"
                    color="secondary"
                    className={clases.buttonEdit}
                    data-id={rol.id}
                    onClick={handleEdit}
                    startIcon={<EditIcon />}
                  >
                    EDITAR
                  </ButtonMaterial>
                  <ButtonMaterial
                    variant="contained"
                    color="secondary"
                    className={clases.buttonDelete}
                    data-id={rol.id}
                    onClick={handleDelete}
                    startIcon={<DeleteIcon />}
                  >
                    ELIMINAR
                  </ButtonMaterial>
              </CustomCard.Body>
            </CustomCard>
            ))
            :(
              <div className="col-6 mt-5 border border-light">
                  <h4 className={clases.noRecords}>No hay registros</h4>
              </div>
            )}
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
                  initialValues={rol ? rol : InitialValues}
                  validationSchema={FormSchema}
                  onSubmit={SentRols}
                  >
                  {({ errors, touched }) => (
                    <Form id="form">
                      <div className="form-group mb-3">
                        <label htmlFor="name">Rol</label>
                          <Field
                            type="text"
                            name="name"
                            placeholder="Rol"
                            className={isValid(errors, touched, 'name')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="name"
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