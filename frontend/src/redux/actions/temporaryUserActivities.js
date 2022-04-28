import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_TEMPORARYUSERACTIVITIES, LOAD_TEMPORARYUSERACTIVITIE } from '../types';

import Swal from 'sweetalert2';

export const startLoadTemporaryUserActivities = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/temporaryUserActivities', {});
    let data = await resp.json();
    dispatch(LoadTemporaryUserActivities(data));
  };
};

export const findTemporaryUserActivitie = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadTemporaryUserActivitie(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/temporaryUserActivities/${id}`, {});
      let data = await resp.json();
      dispatch(LoadTemporaryUserActivitie(data));
    };
  }
};

export const createTemporaryUserActivitie = (nameForm, observationsForm, typeForm) => {
  return async (dispatch) => {
    let dataTemporaryUserActivities = {
      name: nameForm,
      observations: observationsForm,
      type: typeForm
    };
    try {
      let res = await fetchWithToken('/temporaryUserActivities', dataTemporaryUserActivities, 'POST');
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
      dispatch(startLoadTemporaryUserActivities());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};


export const editTemporaryUserActivitie = (id, nameForm, observationsForm, typeForm) => {
  return async (dispatch) => {
    let dataTemporaryUserActivities = {
      name: nameForm,
      observations: observationsForm,
      type: typeForm,
      userId: id
    };
    try {
      let res = await fetchWithToken(`/temporaryUserActivities/${id}`, dataTemporaryUserActivities, 'PUT');
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
      dispatch(startLoadTemporaryUserActivities());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};

export const deleteTemporaryUserActivitie = (id) => {
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
            let res = await fetchWithToken(`/temporaryUserActivities/${id}`, null, 'DELETE');
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
        dispatch(startLoadTemporaryUserActivities());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadTemporaryUserActivities = (temporaryUserActivities) => ({
  type: LOAD_TEMPORARYUSERACTIVITIES,
  payload: temporaryUserActivities,
});

export const LoadTemporaryUserActivitie = (temporaryUserActivitie) => ({
  type: LOAD_TEMPORARYUSERACTIVITIE,
  payload: temporaryUserActivitie,
});