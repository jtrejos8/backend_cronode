import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Table  from '../../../components/ui/table/index';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadUsers, findUser, createUser, editUser, deleteUser } from '../../../redux/actions/users';
import { Modal, Button  } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { CustomSpinner } from '../../../components/ui/spinner/styles';
import { CustomBreadCrumb } from '../../../components/ui/breadcrumb/index';
import { isValid, ValidateMessage } from '../../../helpers/validate';
import { CustomSelect } from '../../../components/ui/select/index';
import { startLoadPositions } from '../../../redux/actions/positions';
import { startLoadRols } from '../../../redux/actions/rols';
import { startLoadContractTypes } from '../../../redux/actions/contractTypes';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const InitialValues = {
    username: '',
    misena_email: '',
    institutional_email: '',
    document: '',
    birthdate: '',
    phone: '',
    phone_ip: '',
    gender: '',
    position: '',
    rol: '',
    contractType: '',
    profession: '',
    grade: '',
    isBossArea: '',
    last_academic_level: '',
    state: '',
    photo: ''
}

const FormSchema = yup.object().shape({
    code: yup.string().required('El campo codigó es requerido'),
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
    { name: 'USUARIOS', link: '/', isLink: true} ,
    { name: 'USUARIOS', link: '/', isLink: false }
];

export const UsersScreen = () => {
    const dispatch = useDispatch();

    const { users, user, loading } = useSelector(state => state.allUsers);
    const { rols } = useSelector(state => state.allRols);
    const { positions } = useSelector(state => state.allPositions);
    const { contractTypes } = useSelector(state => state.allContractTypes);

    const [ show, setShow ] = useState(false);

    const handleClose = () => {
      if(edit){
        dispatch(findUser(null));
      }
      setShow(false);
    };

    const [ buttonNameAction, setButtonNameAction ] = useState();

    const [ id, setId ] = useState();

    const [ edit, setEdit ] = useState(false);

    const [ title, setTitle ] = useState();

    const getRols = rols.map(rol => (
        {
            label: rol.name,
            value: rol.id
        }
    ));

    const getPositions = positions.map(position => (
        {
            label: position.name,
            value: position.id
        }
    ));

    const getContractTypes = contractTypes.map(contractType => (
        {
            label: contractType.name,
            value: contractType.id
        }
    ));

    const options = [
        {value:'femenino', label:'Femenino'},
        {value:'masculino', label:'Masculino'}
      ];

    const SentUsers = ({ username, misena_email, institutional_email, document, birthdate, phone, phone_ip, gender, position, rol, contractType, profession, grade, isBossArea, last_academic_level, state, photo }) => {
        if(edit){
            dispatch(editUser(id, username, misena_email, institutional_email, document, birthdate, phone, phone_ip, gender, position, rol, contractType, profession, grade, isBossArea, last_academic_level, state, photo ));
            setShow(false);
        }else{
          setShow(false);
          dispatch(createUser(username, misena_email, institutional_email, document, birthdate, phone, phone_ip, gender, position, rol, contractType, profession, grade, isBossArea, last_academic_level, state, photo));
        }
      };

      const handleShow = () => {
        setShow(true);
        setEdit(false);
        setTitle('Crear usuario');
        setButtonNameAction("Crear");
      };
    
      const handleEdit = (e) => {
        let id = e.currentTarget.dataset.id;
        setId(id);
        dispatch(findUser(id));
        setTitle('Editar usuario');
        setButtonNameAction("Editar");
        setEdit(true);
      };
    
      const handleDelete = async(e) => {
        let id = await e.currentTarget.dataset.id;
        dispatch(deleteUser(id));
      };


    const columns = [
        {
            name:'Nombre',
            selector:'username',
            sortable: true,
            center: true,
            grow: 2,
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
        dispatch(startLoadUsers());
        dispatch(startLoadPositions());
        dispatch(startLoadRols());
        dispatch(startLoadContractTypes());
        if(user){
            setShow(true);
        }
    }, [dispatch, user]);
    
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
                    data = { users.users }
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
                  initialValues={user ? user : InitialValues}
                  validationSchema={FormSchema}
                  onSubmit={SentUsers}
                  >
                  {({ errors, touched }) => (
                    <Form id="form">
                      <Tabs>
                        <TabList>
                            <Tab>Personal</Tab>
                            <Tab>Contacto</Tab>
                            <Tab>Laboral</Tab>
                            <Tab>Otra</Tab>
                        </TabList>

                            <TabPanel>
                            <div className="form-group mb-3">
                            <label htmlFor="username">Nombre</label>
                                <Field
                                type="text"
                                name="username"
                                placeholder="Nombre completo"
                                className={isValid(errors, touched, 'username')}
                                />
                                <ValidateMessage
                                errors={errors}
                                touched={touched}
                                field="username"
                                />
                            </div>
                            <div className="form-group mb-3">
                            <label htmlFor="document">Documento</label>
                                <Field
                                type="text"
                                name="document"
                                placeholder="Documento"
                                className={isValid(errors, touched, 'document')}
                                />
                                <ValidateMessage
                                errors={errors}
                                touched={touched}
                                field="document"
                                />
                            </div>
                            <div className="form-group mb-3">
                            <label htmlFor="birthdate">Fecha de nacimiento</label>
                                <Field
                                type="date"
                                name="birthdate"
                                className={isValid(errors, touched, 'birthdate')}
                                />
                                <ValidateMessage
                                errors={errors}
                                touched={touched}
                                field="birthdate"
                                />
                            </div>
                            <div className="form-group mb-3">
                            <label htmlFor="gender">Genero</label>
                            <Field 
                                name={'gender'} 
                                component={CustomSelect} 
                                options={options}
                            />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="form-group mb-3">
                                <label htmlFor="misena_email">Correo misena</label>
                                <Field
                                    type="text"
                                    name="misena_email"
                                    placeholder="Correo misena"
                                    className={isValid(errors, touched, 'misena_email')}
                                />
                                <ValidateMessage
                                    errors={errors}
                                    touched={touched}
                                    field="misena_email"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="institutional_email">Correo institucional</label>
                                <Field
                                    type="text"
                                    name="institutional_email"
                                    placeholder="Correo institucional"
                                    className={isValid(errors, touched, 'institutional_email')}
                                />
                                <ValidateMessage
                                    errors={errors}
                                    touched={touched}
                                    field="institutional_email"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="phone_ip">Telefono ip</label>
                                <Field
                                    type="number"
                                    name="phone_ip"
                                    placeholder="Telefono ip"
                                    className={isValid(errors, touched, 'phone_ip')}
                                />
                                <ValidateMessage
                                    errors={errors}
                                    touched={touched}
                                    field="phone_ip"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="phone">Telefono</label>
                                <Field
                                    type="number"
                                    name="phone"
                                    placeholder="Telefono"
                                    className={isValid(errors, touched, 'phone')}
                                />
                                <ValidateMessage
                                    errors={errors}
                                    touched={touched}
                                    field="phone"
                                />
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="form-group mb-3">
                            <label htmlFor="position">Cargo</label>
                            <Field 
                                name={'position'} 
                                component={CustomSelect} 
                                options={getContractTypes}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="contractType">Tipo de contrato</label>
                            <Field 
                                name={'contractType'} 
                                component={CustomSelect} 
                                options={getPositions}
                            />
                        </div>
                        <div className="form-group mb-3">
                                <label htmlFor="profession">Profesion</label>
                                <Field
                                    type="text"
                                    name="profession"
                                    placeholder="Profesion del usuario"
                                    className={isValid(errors, touched, 'profession')}
                                />
                                <ValidateMessage
                                    errors={errors}
                                    touched={touched}
                                    field="profession"
                                />
                        </div>
                        <div className="form-group mb-3">
                                <label htmlFor="grade">Grado</label>
                                <Field
                                    type="number"
                                    name="grade"
                                    placeholder="Grado del usuario"
                                    className={isValid(errors, touched, 'grade')}
                                />
                                <ValidateMessage
                                    errors={errors}
                                    touched={touched}
                                    field="grade"
                                />
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="form-group mb-3">
                                <label htmlFor="photo">Foto</label>
                                <Field
                                    type="file"
                                    name="photo"
                                    className={isValid(errors, touched, 'photo')}
                                />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="rol">Rol</label>
                            <Field 
                                name={'rol'} 
                                component={CustomSelect} 
                                options={getRols}
                            />
                        </div>
                        <div className="form-group mb-2">
                        <label htmlFor="state">Jefe de area</label>
                          <Field
                            type="checkbox"
                            name="state"
                            className={isValid(errors, touched, 'state')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="state"
                          />
                      </div>
                      <div className="form-group mb-3">
                                <label htmlFor="last_academic_level">Ultimo nivel academico</label>
                                <Field
                                    type="text"
                                    name="last_academic_level"
                                    placeholder="Ultimo nivel academico del usuario"
                                    className={isValid(errors, touched, 'last_academic_level')}
                                />
                                <ValidateMessage
                                    errors={errors}
                                    touched={touched}
                                    field="last_academic_level"
                                />
                        </div>
                        </TabPanel>
                    </Tabs>
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
