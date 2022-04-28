import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_USERS, LOAD_USER } from '../types';

import Swal from 'sweetalert2';

export const startLoadUsers = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/users', {});
    let data = await resp.json();
    dispatch(LoadUsers(data));
  };
};

export const findUser = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadUser(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/users/${id}`, {});
      let data = await resp.json();
      dispatch(LoadUser(data));
    };
  }
};

export const createUser = (usernameForm, misena_emailForm, institutional_emailForm, documentForm, birthdateForm, phoneForm, phone_ipForm, genderForm, positionForm, rolForm, contractTypeForm, professionForm, gradeForm, isBossAreaForm, last_academic_levelForm, stateForm, photoForm) => {
  return async (dispatch) => {
    let dataUsers = {
      username: usernameForm,
      misena_email: misena_emailForm,
      institutional_email: institutional_emailForm,
      document: documentForm,
      birthdate: birthdateForm,
      phone: phoneForm,
      phone_ip: phone_ipForm,
      gender: genderForm,
      positionId: positionForm,
      rolId: rolForm,
      contractTypeId: contractTypeForm,
      profession: professionForm,
      grade: gradeForm,
      isBossArea: isBossAreaForm,
      last_academic_level: last_academic_levelForm,
      state: stateForm,
      photo: photoForm,
    };
    try {
      let res = await fetchWithToken('/users', dataUsers, 'POST');
      let data = await res.json();
      if(res.status === 201){
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
          title: data
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message
        })
      }
      dispatch(startLoadUsers());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};


export const editUser = (id, usernameForm) => {
  return async (dispatch) => {
    let dataUsers = {
      username: usernameForm,
      userId: id
    };
    try {
      let res = await fetchWithToken(`/users/${id}`, dataUsers, 'PUT');
      let data = await res.json();
      if(res.status === 200){
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
          title: data
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message
        })
      }
      dispatch(startLoadUsers());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    Swal.fire({
      title: '¿Estas seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: `Si, eliminar`,
      cancelButtonText: `Cancelar`,
      cancelButtonColor: "#d33",
    }).then( async(result) => {
      if (result.isConfirmed) {
          try {
            let res = await fetchWithToken(`/users/${id}`, null, 'DELETE');
            let data = await res.json();
            console.log(data);
            if(res.status === 200){
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
              title: data
            })
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: data.message
            })
          }
        dispatch(startLoadUsers());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadUsers = (users) => ({
  type: LOAD_USERS,
  payload: users,
});

export const LoadUser = (user) => ({
  type: LOAD_USER,
  payload: user,
});