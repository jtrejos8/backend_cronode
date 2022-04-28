import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_LEARNINGRESULTS, LOAD_LEARNINGRESULT } from '../types';

import Swal from 'sweetalert2';

export const startLoadlearningResults = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/learningResults', {});
    let data = await resp.json();
    dispatch(LoadlearningResults(data));
  };
};

export const findlearningResult = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadlearningResult(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/learningResults/${id}`, {});
      let data = await resp.json();
      dispatch(LoadlearningResult(data));
    }
  }
  
};

export const createlearningResult = (descriptionForm, summaryForm, hoursForm, projectPhaseForm, competenceForm, associatedTrimestersForm, trimesterEvaluateForm) => {
  return async (dispatch) => {

    let dataLearningResults = {
        description: descriptionForm,
        summary: summaryForm,
        hours: hoursForm,
        projectPhase: projectPhaseForm,
        competenceId: competenceForm.id,
        associatedTrimesters: associatedTrimestersForm,
        trimesterEvaluate: trimesterEvaluateForm
    };
    try {
      let res = await fetchWithToken('/learningResults', dataLearningResults, 'POST');
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
      dispatch(startLoadlearningResults());
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};


export const editlearningResult = (id, descriptionForm, summaryForm, hoursForm, projectPhaseForm, competenceForm, associatedTrimestersForm, trimesterEvaluateForm) => {
  return async (dispatch) => {
    let dataLearningResults = {
        description: descriptionForm,
        summary: summaryForm,
        hours: hoursForm,
        projectPhase: projectPhaseForm,
        competenceId: competenceForm.id,
        associatedTrimesters: associatedTrimestersForm,
        trimesterEvaluate: trimesterEvaluateForm,
        userId: id
    };
    try {
      let res = await fetchWithToken(`/learningResults/${id}`, dataLearningResults, 'PUT');
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
    dispatch(startLoadlearningResults());
    } catch (error) {
    console.log(error);
    return null;
    }
  }
};

export const deletelearningResult = (id) => {
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
            let res = await fetchWithToken(`/learningResults/${id}`, null, 'DELETE');
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
        dispatch(startLoadlearningResults());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadlearningResults = (learningResults) => ({
  type: LOAD_LEARNINGRESULTS,
  payload: learningResults,
});

export const LoadlearningResult = (learningResult) => ({
  type: LOAD_LEARNINGRESULT,
  payload: learningResult,
});