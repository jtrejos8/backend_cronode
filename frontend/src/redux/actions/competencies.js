import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_COMPETENCIES, LOAD_COMPETENCIE } from '../types';

import Swal from 'sweetalert2';

export const startLoadCompetencies = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/competences', {});
    let data = await resp.json();
    dispatch(LoadCompetencies(data));
  };
};

export const findCompetencie = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadCompetencie(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/competences/${id}`, {});
      let data = await resp.json();
      dispatch(LoadCompetencie(data));
    }
  }
  
};

export const createCompetencie = (codeForm, descriptionForm, summaryForm, formationProgramForm, hoursForm) => {
  return async (dispatch) => {

    let dataCompetencies = {
      code: codeForm,
      description: descriptionForm,
      summary: summaryForm,
      hours: hoursForm,
      formationProgramId: formationProgramForm.id,
    };
    try {
      let res = await fetchWithToken('/competences', dataCompetencies, 'POST');
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
      dispatch(startLoadCompetencies());
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};


export const editCompetencie = (id, codeForm, descriptionForm, summaryForm, formationProgramForm, hoursForm) => {
  return async (dispatch) => {
    let dataCompetencies = {
      code: codeForm,
      description: descriptionForm,
      summary: summaryForm,
      formationProgramId: formationProgramForm.id,
      hours: hoursForm,
      userId: id
    };
    try {
      let res = await fetchWithToken(`/competences/${id}`, dataCompetencies, 'PUT');
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
        });
        Toast.fire({
          icon: 'success',
          title: data
        });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message
        });
      }
    dispatch(startLoadCompetencies());
    } catch (error) {
    console.log(error);
    return null;
    }
  }
};

export const deleteCompetencie = (id) => {
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
            let res = await fetchWithToken(`/competences/${id}`, null, 'DELETE');
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
        dispatch(startLoadCompetencies());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadCompetencies = (competencies) => ({
  type: LOAD_COMPETENCIES,
  payload: competencies,
});

export const LoadCompetencie = (competencie) => ({
  type: LOAD_COMPETENCIE,
  payload: competencie,
});