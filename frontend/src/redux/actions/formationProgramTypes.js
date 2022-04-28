import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_FORMATIONPROGRAMTYPES, LOAD_FORMATIONPROGRAMTYPE } from '../types';

import Swal from 'sweetalert2';

export const startLoadFormationProgramTypes = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/formationProgramTypes', {});
    let data = await resp.json();
    dispatch(LoadFormationProgramTypes(data));
  };
};

export const findFormationProgramType = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadFormationProgramType(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/formationProgramTypes/${id}`, {});
      let data = await resp.json();
      dispatch(LoadFormationProgramType(data));
    };
  }
};

export const createFormationProgramType = (nameForm, electiveMonthsForm, practiceMonthsForm) => {
  return async (dispatch) => {
    let dataFormationProgramTypes = {
      name: nameForm,
      electiveMonths: electiveMonthsForm,
      practiceMonths: practiceMonthsForm
    };
    try {
      let res = await fetchWithToken('/formationProgramTypes', dataFormationProgramTypes, 'POST');
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
      dispatch(startLoadFormationProgramTypes());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};


export const editFormationProgramType = (id, nameForm, electiveMonthsForm, practiceMonthsForm) => {
  return async (dispatch) => {
    let dataFormationProgramTypes = {
      name: nameForm,
      electiveMonths: electiveMonthsForm,
      practiceMonths: practiceMonthsForm,
      userId: id
    };
    try {
      let res = await fetchWithToken(`/formationProgramTypes/${id}`, dataFormationProgramTypes, 'PUT');
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
      dispatch(startLoadFormationProgramTypes());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};

export const deleteFormationProgramType = (id) => {
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
            let res = await fetchWithToken(`/formationProgramTypes/${id}`, null, 'DELETE');
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
        dispatch(startLoadFormationProgramTypes());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadFormationProgramTypes = (formationProgramTypes) => ({
  type: LOAD_FORMATIONPROGRAMTYPES,
  payload: formationProgramTypes,
});

export const LoadFormationProgramType = (formationProgramType) => ({
  type: LOAD_FORMATIONPROGRAMTYPE,
  payload: formationProgramType,
});