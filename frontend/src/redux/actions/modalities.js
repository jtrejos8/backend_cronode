import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_MODALITIES, LOAD_MODALITIE } from '../types';

import Swal from 'sweetalert2';

export const startLoadModalities = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/modalities', {});
    let data = await resp.json();
    dispatch(LoadModalities(data));
  };
};

export const findModalitie = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadModalitie(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/modalities/${id}`, {});
      let data = await resp.json();
      dispatch(LoadModalitie(data));
    };
  }
};

export const createModalitie = (nameForm) => {
  return async (dispatch) => {
    let dataModalities = {
      name: nameForm
    };
    try {
      let res = await fetchWithToken('/modalities', dataModalities, 'POST');
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
      dispatch(startLoadModalities());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};


export const editModalitie = (id, nameForm) => {
  return async (dispatch) => {
    let dataModalities = {
      name: nameForm,
      userId: id
    };
    try {
      let res = await fetchWithToken(`/modalities/${id}`, dataModalities, 'PUT');
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
      dispatch(startLoadModalities());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};

export const deleteModalitie = (id) => {
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
            let res = await fetchWithToken(`/modalities/${id}`, null, 'DELETE');
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
        dispatch(startLoadModalities());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadModalities = (modalities) => ({
  type: LOAD_MODALITIES,
  payload: modalities,
});

export const LoadModalitie = (modalitie) => ({
  type: LOAD_MODALITIE,
  payload: modalitie,
});