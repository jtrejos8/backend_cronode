import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHEKING_FINISH } from '../types';
import Swal from 'sweetalert2';
import {fetchWithToken} from '../../helpers/fetch';

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken('/authenticated');
    const body = await resp.json();
    if(body.user){
      dispatch(Login(body.user.rol.name,body.user.rol.id));
    }else{
      dispatch(checkingFinish());
    }
  }
};

export const startLogin = (emailForm, passwordForm) => {
  return async (dispatch) => {
    /**
     * Hacer peticion http al backend
     */

    let dataAuth = {
      misena_email: emailForm,
      password: passwordForm
    }

    try {
      let res = await fetch('http://localhost:4000/api/authenticate', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataAuth)
      });

      let data = await res.json();
      if(data.token){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Ingreso exitoso'
        })
        localStorage.setItem('token', data.token);
        dispatch(Login(data.rol.name,data.rol.id));
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message
        })
      }
    } catch (error) {
        console.log(error);
        return null;
    }
  };
};

export const startLogout = () => {
  return (dispatch) => {
      localStorage.clear();
      dispatch(Logout());
  }
};

export const Login = (name, id) => ({
  type: AUTH_LOGIN,
  payload: {
    id,
    name,
  },
});

export const Logout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const checkingFinish = () => {
  return {
    type: AUTH_CHEKING_FINISH,
  };
};

// SOLID
// S -> Single Responsability
