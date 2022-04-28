import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { CustomBreadCrumb } from '../../../components/ui/breadcrumb/index';
import { CustomSpinner } from '../../../components/ui/spinner/styles';
import { useDispatch, useSelector } from 'react-redux';
import  Table  from '../../../components/ui/table/index';
import { startLoadMunicipalities, findMunicipalitie, createMunicipalitie, editMunicipalitie, deleteMunicipalitie } from '../../../redux/actions/municipalities';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button  } from 'react-bootstrap';
import { isValid, ValidateMessage } from '../../../helpers/validate';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { startLoadZones} from '../../../redux/actions/zones';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { CustomSelect } from '../../../components/ui/select/index';

const InitialValues = {
  name: '',
  zone: '',
}

const FormSchema = yup.object().shape({
  name: yup.string().required('El campo nombre de municipios es requerido')
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
  { name: 'MUNICIPIOS', link: '/', isLink: false }
];

export const MunicipalitiesScreen = () => {
  const dispatch = useDispatch();

  const { municipalities, municipalitie, loading } = useSelector(state => state.allMunicipalities);

  const { zones } = useSelector(state => state.allZones);

  const [ show, setShow ] = useState(false);

  const handleClose = () => {
    if(edit){
      dispatch(findMunicipalitie(null));
    }
    setShow(false);
  };

  const [ buttonNameAction, setButtonNameAction ] = useState();

  const [ id, setId ] = useState();

  const [ edit, setEdit ] = useState(false);

  const [ title, setTitle ] = useState();

  const getZones = zones.map(zone => (
    {
      label: zone.name,
      value:zone.id
    }
  ));

  const handleShow = () => {
    setShow(true);
    setEdit(false);
    setTitle('Agregar municipios');
    setButtonNameAction("Crear");
  };

  const handleEdit = (e) => {
    let id = e.currentTarget.dataset.id;
    setId(id);
    dispatch(findMunicipalitie(id));
    setTitle('Editar municipios');
    setButtonNameAction("Editar");
    setEdit(true);
  };

  const handleDelete = async(e) => {
    let id = await e.currentTarget.dataset.id;
    dispatch(deleteMunicipalitie(id));
  };

  const SentMunicipalities = ({ name, zone}) => {
    if(edit){
        dispatch(editMunicipalitie(id, name, zone));
        setShow(false);
    }else{
      setShow(false);
      dispatch(createMunicipalitie(name, zone));
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
        name:'Zona',
        selector:'zone.name',
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
    dispatch(startLoadMunicipalities());
    dispatch(startLoadZones());
    if(municipalitie){
      setShow(true);
    }
  }, [dispatch, municipalitie]);
    
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
                    data = { municipalities }
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
                  initialValues={municipalitie ? municipalitie : InitialValues}
                  validationSchema={FormSchema}
                  onSubmit={SentMunicipalities}
                  >
                  {({ errors, touched }) => (
                    <Form id="form">
                      <div className="form-group mb-3">
                        <label htmlFor="name">Municipios</label>
                          <Field
                            type="text"
                            name="name"
                            placeholder="Municipios"
                            className={isValid(errors, touched, 'name')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="name"
                          />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="zone.name">Zonas</label>
                          <Field 
                            name={'zone.id'}
                            component={CustomSelect} 
                            options={getZones}
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