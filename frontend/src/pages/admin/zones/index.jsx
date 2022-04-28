import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { CustomBreadCrumb } from '../../../components/ui/breadcrumb/index';
import { CustomSpinner } from '../../../components/ui/spinner/styles';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadZones, findZone, createZone, editZone, deleteZone } from '../../../redux/actions/zones';
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
  name: yup.string().required('El campo nombre de zonas es requerido'),
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
  { name: 'UBICACIONES', link: '/', isLink: true} ,
  { name: 'ZONAS', link: '/', isLink: false }
];

export const ZonesScreen = () => {
  const dispatch = useDispatch();

  const { zones, zone, loading } = useSelector(state => state.allZones);

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
    setTitle('Agregar zona');
    setButtonNameAction("Crear");
  };

  const handleEdit = (e) => {
    let id = e.currentTarget.dataset.id;
    setId(id);
    dispatch(findZone(id));
    setTitle('Editar zona');
    setButtonNameAction("Editar");
    setEdit(true);
  };

  const handleDelete = async(e) => {
    let id = await e.currentTarget.dataset.id;
    dispatch(deleteZone(id));
  };

  const SentZones = ({ name }) => {
    if(edit){
        dispatch(editZone(id, name));
        setShow(false);
    }else{
      setShow(false);
      dispatch(createZone(name));
    }
  };


  useEffect(() => {
    dispatch(startLoadZones());
    if(zone){
      setShow(true);
    }
  }, [dispatch, zone]);
    
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
            {zones.length > 0 ? zones.map(zone => (
              <CustomCard className="col-3 mr-3 mb-5" key={zone.id}>
                <h5 className="text-center mt-4 mb-4">{zone.name}</h5>
                <CustomCard.Body>
                  <ButtonMaterial
                    variant="contained"
                    color="secondary"
                    className={clases.buttonEdit}
                    data-id={zone.id}
                    onClick={handleEdit}
                    startIcon={<EditIcon />}
                  >
                    EDITAR
                  </ButtonMaterial>
                  <ButtonMaterial
                    variant="contained"
                    color="secondary"
                    className={clases.buttonDelete}
                    data-id={zone.id}
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
                  initialValues={zone ? zone : InitialValues}
                  validationSchema={FormSchema}
                  onSubmit={SentZones}
                  >
                  {({ errors, touched }) => (
                    <Form id="form">
                      <div className="form-group mb-3">
                        <label htmlFor="name">Zona</label>
                          <Field
                            type="text"
                            name="name"
                            placeholder="Zona"
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