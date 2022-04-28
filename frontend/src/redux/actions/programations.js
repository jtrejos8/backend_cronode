import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_PROGRAMATIONS, LOAD_PROGRAMATION } from '../types';

import Swal from 'sweetalert2';

export const startLoadProgramations = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/programations', {});
    let data = await resp.json();
    dispatch(LoadProgramations(data));
  };
};

export const findProgramation = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadProgramation(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/programations/${id}`, {});
      let data = await resp.json();
      dispatch(LoadProgramation(data));
    };
  }
};

export const createProgramation = (startDateForm, endDateForm, trimesterForm, groupForm, municipalityForm, isActiveForm) => {
  return async (dispatch) => {
    let dataProgramations = {
      startDate: startDateForm,
      endDate: endDateForm,
      trimester: trimesterForm,
      groupId: groupForm,
      municipalityId: municipalityForm,
      isActive: isActiveForm
    };
    try {
      let res = await fetchWithToken('/programations', dataProgramations, 'POST');
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
      dispatch(startLoadProgramations());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};


export const editProgramation = (id, startDateForm, endDateForm, trimesterForm, groupForm, municipalityForm, isActiveForm) => {
  return async (dispatch) => {
    let dataProgramations = {
        startDate: startDateForm,
        endDate: endDateForm,
        trimester: trimesterForm,
        groupId: groupForm,
        municipalityId: municipalityForm,
        isActive: isActiveForm,
        userId: id
    };
    try {
      let res = await fetchWithToken(`/programations/${id}`, dataProgramations, 'PUT');
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
      dispatch(startLoadProgramations());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};

export const deleteProgramation = (id) => {
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
            let res = await fetchWithToken(`/programations/${id}`, null, 'DELETE');
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
        dispatch(startLoadProgramations());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadProgramations = (programations) => ({
  type: LOAD_PROGRAMATIONS,
  payload: programations,
});

export const LoadProgramation = (programation) => ({
  type: LOAD_PROGRAMATION,
  payload: programation,
});