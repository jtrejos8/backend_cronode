import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_TYPEACTIVITIES, LOAD_TYPEACTIVITIE } from '../types';

import Swal from 'sweetalert2';

export const startLoadTypeActivities = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/typeActivities', {});
    let data = await resp.json();
    dispatch(LoadTypeActivities(data));
  };
};

export const findTypeActivitie = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadTypeActivitie(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/typeActivities/${id}`, {});
      let data = await resp.json();
      dispatch(LoadTypeActivitie(data));
    };
  }
};

export const createTypeActivitie = (nameForm, colorForm) => {
  return async (dispatch) => {
    let dataTypeActivities = {
      name: nameForm,
      color: colorForm
    };
    try {
      let res = await fetchWithToken('/typeActivities', dataTypeActivities, 'POST');
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
      dispatch(startLoadTypeActivities());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};


export const editTypeActivitie = (id, nameForm, colorForm) => {
  return async (dispatch) => {
    let dataTypeActivities = {
      name: nameForm,
      color: colorForm,
      userId: id
    };
    try {
      let res = await fetchWithToken(`/typeActivities/${id}`, dataTypeActivities, 'PUT');
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
      dispatch(startLoadTypeActivities());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};

export const deleteTypeActivitie = (id) => {
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
            let res = await fetchWithToken(`/typeActivities/${id}`, null, 'DELETE');
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
        dispatch(startLoadTypeActivities());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadTypeActivities = (typeActivities) => ({
  type: LOAD_TYPEACTIVITIES,
  payload: typeActivities,
});

export const LoadTypeActivitie = (typeActivitie) => ({
  type: LOAD_TYPEACTIVITIE,
  payload: typeActivitie,
});