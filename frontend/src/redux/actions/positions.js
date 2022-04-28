import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_POSITIONS, LOAD_POSITION } from '../types';

import Swal from 'sweetalert2';

export const startLoadPositions = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/positions', {});
    let data = await resp.json();
    dispatch(LoadPositions(data));
  };
};

export const findPosition = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadPosition(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/positions/${id}`, {});
      let data = await resp.json();
      dispatch(LoadPosition(data));
    };
  }
};

export const createPosition = (nameForm, typeForm) => {
  return async (dispatch) => {
    let dataPositions = {
      name: nameForm,
      type: typeForm
    };
    try {
      let res = await fetchWithToken('/positions', dataPositions, 'POST');
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
      dispatch(startLoadPositions());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};


export const editPosition = (id, nameForm, typeForm) => {
  return async (dispatch) => {
    let dataPositions = {
      name: nameForm,
      type: typeForm,
      userId: id
    };
    try {
      let res = await fetchWithToken(`/positions/${id}`, dataPositions, 'PUT');
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
      dispatch(startLoadPositions());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};

export const deletePosition = (id) => {
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
            let res = await fetchWithToken(`/positions/${id}`, null, 'DELETE');
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
        dispatch(startLoadPositions());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadPositions = (positions) => ({
  type: LOAD_POSITIONS,
  payload: positions,
});

export const LoadPosition = (position) => ({
  type: LOAD_POSITION,
  payload: position,
});