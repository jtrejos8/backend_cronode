import { Field, Form, Formik } from 'formik';
import React from 'react';
import { CustomCard } from '../../ui/card/styles';
import * as yup from 'yup';
import { isValid, ValidateMessage } from '../../../helpers/validate';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../../redux/actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import logoSGH from '../../../assets/img/logoSGH.png';

const useStyle = makeStyles({
  logo : {
    margin: 'auto',
    width: '150px',
    height: '100px',
  },
  buttonSave: {
    backgroundColor: '#93C54B',
    color: 'white'
  }
});

const FormSchema = yup.object().shape({
  email: yup.string().required('El campo email es requerido'),
  password: yup.string().required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const login = ({ email, password }) => {
    dispatch(startLogin(email, password));
  };

  const clases = useStyle()

  return (
    <CustomCard className="row justify-content-center">
    {/* <CustomCard src={Img}> */}
    <img src={logoSGH} className={`card-img-top img-fluid mt-3 ${clases.logo}`} alt="logo"/>
    <CustomCard.Body>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={FormSchema}
        onSubmit={login}>
        {({ errors, touched }) => (
          <Form>
            <div className="form-group mb-3">
              <PersonIcon className="mr-1 mb-1"/>
              <label htmlFor="email">Correo</label>
              <Field
                type="email"
                name="email"
                placeholder="correo@misena.edu.co"
                className={isValid(errors, touched, 'email')}
              />
              <ValidateMessage
                errors={errors}
                touched={touched}
                field="email"
              />
            </div>
            <div className="form-group mb-3">
              <VpnKeyIcon className="mr-1 mb-1"/>
              <label htmlFor="email">Contraseña</label>
              <Field
                type="password"
                name="password"
                placeholder="Contraseña"
                className={isValid(errors, touched, 'password')}
              />
              <ValidateMessage
                errors={errors}
                touched={touched}
                field="password"
              />
            </div>
            <button type="submit" className={`btn col-12 ${clases.buttonSave}`}>
              Acceder
              <MeetingRoomIcon/>
            </button>
          </Form>
        )}
      </Formik>
    </CustomCard.Body>
 </CustomCard>
  );
};
