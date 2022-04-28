import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_AMBIENTS, LOAD_AMBIENT, LOAD_AMBIENTS_SCHEDULES, LOAD_AMBIENT_SCHEDULES} from '../types';

import Swal from 'sweetalert2';

export const startLoadAmbients = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/ambients', {});
    let data = await resp.json();
    dispatch(LoadAmbients(data));
  };
};

export const findAmbient = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadAmbient(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/ambients/${id}`, {});
      let data = await resp.json();
      dispatch(LoadAmbient(data));
    };
  }
};

export const createAmbient = (nameForm, stateForm, usabilityForm) => {
  return async (dispatch) => {
    let dataAmbients = {
      name: nameForm,
      state: stateForm,
      usability: usabilityForm,
    };

    try {
      let res = await fetchWithToken('/ambients', dataAmbients, 'POST');
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
      dispatch(startLoadAmbients());
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};


export const editAmbient = (id, nameForm, stateForm, usabilityForm) => {
  return async (dispatch) => {
     let dataAmbients = {
      name: nameForm,
      state: stateForm,
      usability: usabilityForm,
      userId: id
    };
      try {
        let res = await fetchWithToken(`/ambients/${id}`, dataAmbients, 'PUT');
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
      dispatch(startLoadAmbients());
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};

export const deleteAmbient = (id) => {
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
            let res = await fetchWithToken(`/ambients/${id}`, null, 'DELETE');
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
        dispatch(startLoadAmbients());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const startLoadAmbientsSchedules = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/ambients/schedules', {});
    let data = await resp.json();
    dispatch(LoadAmbientsSchedules(data));
  }
};

export const startLoadAmbientSchedules = (id) => {
  return async (dispatch) => {
      let resp = await fetchWithToken(`/ambients/schedules/${id}`);
      let data = await resp.json();
      dispatch(LoadAmbientSchedules(data.ambient));
  }
};
 
export const LoadAmbients = (ambients) => ({
  type: LOAD_AMBIENTS,
  payload: ambients,
});

export const LoadAmbient = (ambient) => ({
  type: LOAD_AMBIENT,
  payload: ambient,
});

export const LoadAmbientsSchedules = (ambientsSchedules) => ({
  type: LOAD_AMBIENTS_SCHEDULES,
  payload: ambientsSchedules,
});

export const LoadAmbientSchedules = (ambientSchedules) => ({
  type: LOAD_AMBIENT_SCHEDULES,
  payload: ambientSchedules,
});