import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_CONTRACTTYPES, LOAD_CONTRACTTYPE } from '../types';

import Swal from 'sweetalert2';

export const startLoadContractTypes = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/contractTypes', {});
    let data = await resp.json();
    dispatch(LoadContractTypes(data));
  };
};

export const findContractType = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadContractType(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/contractTypes/${id}`, {});
      let data = await resp.json();
      dispatch(LoadContractType(data));
    };
  }
};

export const createContractType = (nameForm) => {
  return async (dispatch) => {
    let dataContractTypes = {
      name: nameForm
    };
    try {
      let res = await fetchWithToken('/contractTypes', dataContractTypes, 'POST');
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
      dispatch(startLoadContractTypes());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};


export const editContractType = (id, nameForm) => {
  return async (dispatch) => {
    let dataContractTypes = {
      name: nameForm,
      userId: id
    };
    try {
      let res = await fetchWithToken(`/contractTypes/${id}`, dataContractTypes, 'PUT');
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
      dispatch(startLoadContractTypes());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};

export const deleteContractType = (id) => {
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
            let res = await fetchWithToken(`/contractTypes/${id}`, null, 'DELETE');
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
        dispatch(startLoadContractTypes());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadContractTypes = (contractTypes) => ({
  type: LOAD_CONTRACTTYPES,
  payload: contractTypes,
});

export const LoadContractType = (contractType) => ({
  type: LOAD_CONTRACTTYPE,
  payload: contractType,
});