import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_ZONES, LOAD_ZONE } from '../types';

import Swal from 'sweetalert2';

export const startLoadZones = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/zones', {});
    let data = await resp.json();
    dispatch(LoadZones(data));
  };
};

export const findZone = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadZone(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/zones/${id}`, {});
      let data = await resp.json();
      dispatch(LoadZone(data));
    };
  }
};

export const createZone = (nameForm) => {
  return async (dispatch) => {
    let dataZones = {
      name: nameForm
    };
    try {
      let res = await fetchWithToken('/zones', dataZones, 'POST');
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
      dispatch(startLoadZones());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};


export const editZone = (id, nameForm) => {
  return async (dispatch) => {
    let dataZones = {
      name: nameForm,
      userId: id
    };
    try {
      let res = await fetchWithToken(`/zones/${id}`, dataZones, 'PUT');
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
      dispatch(startLoadZones());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};

export const deleteZone = (id) => {
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
            let res = await fetchWithToken(`/zones/${id}`, null, 'DELETE');
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
        dispatch(startLoadZones());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadZones = (zones) => ({
  type: LOAD_ZONES,
  payload: zones,
});

export const LoadZone = (zone) => ({
  type: LOAD_ZONE,
  payload: zone,
});