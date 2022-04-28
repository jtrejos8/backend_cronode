import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_DESPROGRAMMINGREASONS, LOAD_DESPROGRAMMINGREASON } from '../types';

import Swal from 'sweetalert2';

export const startLoadDeprogrammingReasons = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/deprogrammingReasons', {});
    let data = await resp.json();
    dispatch(LoadDeprogrammingReasons(data));
  };
};

export const findDeprogrammingReason = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadDeprogrammingReason(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/deprogrammingReasons/${id}`, {});
      let data = await resp.json();
      dispatch(LoadDeprogrammingReason(data));
    };
  }
};

export const createDeprogrammingReason = (nameForm) => {
  return async (dispatch) => {
    let dataDeprogrammingReasons = {
      name: nameForm
    };
    try {
      let res = await fetchWithToken('/deprogrammingReasons', dataDeprogrammingReasons, 'POST');
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
      dispatch(startLoadDeprogrammingReasons());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};


export const editDeprogrammingReason = (id, nameForm) => {
  return async (dispatch) => {
    let dataDeprogrammingReasons = {
      name: nameForm,
      userId: id
    };
    try {
      let res = await fetchWithToken(`/deprogrammingReasons/${id}`, dataDeprogrammingReasons, 'PUT');
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
      dispatch(startLoadDeprogrammingReasons());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};

export const deleteDeprogrammingReason = (id) => {
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
            let res = await fetchWithToken(`/deprogrammingReasons/${id}`, null, 'DELETE');
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
        dispatch(startLoadDeprogrammingReasons());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadDeprogrammingReasons = (deprogrammingReasons) => ({
  type: LOAD_DESPROGRAMMINGREASONS,
  payload: deprogrammingReasons,
});

export const LoadDeprogrammingReason = (deprogrammingReason) => ({
  type: LOAD_DESPROGRAMMINGREASON,
  payload: deprogrammingReason,
});