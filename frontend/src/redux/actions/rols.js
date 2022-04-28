import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_ROLS, LOAD_ROL } from '../types';

import Swal from 'sweetalert2';

export const startLoadRols = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/rols', {});
    let data = await resp.json();
    dispatch(LoadRols(data));
  };
};

export const findRol = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadRol(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/rols/${id}`, {});
      let data = await resp.json();
      dispatch(LoadRol(data));
    };
  }
};

export const createRol = (nameForm) => {
  return async (dispatch) => {
    let dataRols = {
      name: nameForm
    };
    try {
      let res = await fetchWithToken('/rols', dataRols, 'POST');
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
      dispatch(startLoadRols());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};


export const editRol = (id, nameForm) => {
  return async (dispatch) => {
    let dataRols = {
      name: nameForm,
      userId: id
    };
    try {
      let res = await fetchWithToken(`/rols/${id}`, dataRols, 'PUT');
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
      dispatch(startLoadRols());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};

export const deleteRol = (id) => {
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
            let res = await fetchWithToken(`/rols/${id}`, null, 'DELETE');
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
        dispatch(startLoadRols());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadRols = (rols) => ({
  type: LOAD_ROLS,
  payload: rols,
});

export const LoadRol = (rol) => ({
  type: LOAD_ROL,
  payload: rol,
});