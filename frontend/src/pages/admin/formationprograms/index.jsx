import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Table  from '../../../components/ui/table/index';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadFormationPrograms, findFormationProgram, createFormationProgram, editFormationProgram, deleteFormationProgram} from '../../../redux/actions/formationPrograms';
import { Modal, Button  } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { CustomSpinner } from '../../../components/ui/spinner/styles';
import { CustomBreadCrumb } from '../../../components/ui/breadcrumb/index';
import { isValid, ValidateMessage } from '../../../helpers/validate';
import { CustomSelect } from '../../../components/ui/select/index';
import { startLoadFormationProgramTypes} from '../../../redux/actions/formationProgramTypes';

const InitialValues = {
    code: '',
    name: '',
    formationType: '',
    isRegisterQualified: '',
    isRegisterQualifiedDate: ''
}

const FormSchema = yup.object().shape({
    code: yup.string().required('El campo codigó es requerido'),
    name: yup.string().required('El campo nombre es requerido'),
    isRegisterQualified: yup.string().required('El campo registro es requerido'),
    isRegisterQualifiedDate: yup.string().required('El campo fechas de registro es requerido'),
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
    { name: 'PROGRAMAS DE FORMACIÓN', link: '/', isLink: false }
];

export const FormationProgramsScreen = () => {
    const dispatch = useDispatch();
    const { formationPrograms, formationProgram, loading } = useSelector(state => state.allFormationPrograms);
    const { formationProgramTypes } = useSelector(state => state.allFormationProgramTypes);

    const [ show, setShow ] = useState(false);

    const handleClose = () => {
      if(edit){
        dispatch(findFormationProgram(null));
      }
      setShow(false);
    };

    const [ buttonNameAction, setButtonNameAction ] = useState();

    const [ id, setId ] = useState();

    const [ edit, setEdit ] = useState(false);

    const [ title, setTitle ] = useState();

    const getFormationProgramTypes = formationProgramTypes.map(formationType => (
        {
            label: formationType.name,
            value:formationType.id
        }
    ));

    const SentFormationPrograms = ({ code, name, formationType, isRegisterQualified, isRegisterQualifiedDate }) => {
        if(edit){
            dispatch(editFormationProgram(id, code, name, formationType, isRegisterQualified, isRegisterQualifiedDate ));
            setShow(false);
        }else{
          setShow(false);
          dispatch(createFormationProgram(code, name, formationType, isRegisterQualified, isRegisterQualifiedDate ));
        }
      };
      
      const handleShow = () => {
        setShow(true);
        setEdit(false);
        setTitle('Crear programa de formacion');
        setButtonNameAction("Crear");
      };
    
      const handleEdit = (e) => {
        let id = e.currentTarget.dataset.id;
        setId(id);
        dispatch(findFormationProgram(id));
        setTitle('Editar programa de formacion');
        setButtonNameAction("Editar");
        setEdit(true);
      };
    
      const handleDelete = async(e) => {
        let id = await e.currentTarget.dataset.id;
        dispatch(deleteFormationProgram(id));
      };


    const columns = [
        {
            name:'ID',
            selector:'code',
            sortable: true,
            center: true,
            grow: 1,
        },
        {
            name:'Nombre',
            selector:'name',
            sortable: true,
            center: true,
            grow: 2,
        },
        {
            name:'Formacion',
            selector:'formationType.name',
            sortable: true,
            center: true,
            grow: 2,
        },
        {
            name:'Registro cualificado',
            selector:'isRegisterQualified',
            sortable: true,
            center: true,
            grow: 2,
            cell: formationPrograms => (
                <>
                    {(formationPrograms.isRegisterQualified) ? <span>Sí</span> : <span className="text-danger">No</span>}
                </>
                )
        },
        {
            name:'Fecha de registro cualificado',
            selector:'isRegisterQualifiedDate',
            sortable: true,
            center: true,
            grow: 2,
            cell: formationPrograms => (
                <>
                    {(formationPrograms.isRegisterQualifiedDate !== null) ? formationPrograms.isRegisterQualifiedDate.split('T00:00:00.000Z') : 'No hay fecha de registro'}
                </>
                )
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
    dispatch(startLoadFormationPrograms());
    dispatch(startLoadFormationProgramTypes());
    if(formationProgram){
        setShow(true);
      }
    }, [dispatch, formationProgram]);
    
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
                    data = { formationPrograms }
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
                  initialValues={formationProgram ? formationProgram : InitialValues}
                  validationSchema={FormSchema}
                  onSubmit={SentFormationPrograms}
                  >
                  {({ errors, touched }) => (
                    <Form id="form">
                      <div className="form-group mb-3">
                        <label htmlFor="code">Código</label>
                          <Field
                            type="text"
                            name="code"
                            placeholder="Código del programa"
                            className={isValid(errors, touched, 'code')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="code"
                          />
                      </div>
  
                      <div className="form-group mb-3">
                        <label htmlFor="name">Nombre</label>
                          <Field
                            type="text"
                            name="name"
                            placeholder="Nombre del programa"
                            className={isValid(errors, touched, 'name')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="name"
                          />
                      </div>

                      <div className="form-group mb-3">
                        <label htmlFor="formationType.name">Tipo de rograma de formación</label>
                          <Field 
                            name={'formationType.id'}
                            component={CustomSelect} 
                            options={getFormationProgramTypes}
                          />
                      </div>
  
                      <div className="form-group mb-3">
                        <label htmlFor="isRegisterQualified">Registro cualificado</label>
                          <Field
                            type="checkbox"
                            name="isRegisterQualified"
                            placeholder="Registro cualificado de la programa"
                            className={isValid(errors, touched, 'isRegisterQualified')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="isRegisterQualified"
                          />
                      </div>
                  
                      <div className="form-group mb-3">
                        <label htmlFor="isRegisterQualifiedDate">Fecha del regsitro</label>
                          <Field
                            type="date"
                            name="isRegisterQualifiedDate"
                            className={isValid(errors, touched, 'isRegisterQualifiedDate')}
                          />
                          <ValidateMessage
                            errors={errors}
                            touched={touched}
                            field="isRegisterQualifiedDate"
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