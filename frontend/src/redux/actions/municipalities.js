import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_MUNICIPALITIES, LOAD_MUNICIPALITIE } from '../types';

import Swal from 'sweetalert2';

export const startLoadMunicipalities = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/municipalities', {});
    let data = await resp.json();
    dispatch(LoadMunicipalities(data));
  };
};

export const findMunicipalitie = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadMunicipalitie(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/municipalities/${id}`, {});
      let data = await resp.json();
      dispatch(LoadMunicipalitie(data));
    };
  }
};

export const createMunicipalitie = (nameForm, zoneForm) => {
  return async (dispatch) => {
    let dataMunicipalities = {
      name: nameForm,
      zoneId: zoneForm.id,
    };
    try {
      let res = await fetchWithToken('/municipalities', dataMunicipalities, 'POST');
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
      dispatch(startLoadMunicipalities());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};


export const editMunicipalitie = (id, nameForm, zoneForm) => {
  return async (dispatch) => {
    let dataMunicipalities = {
      name: nameForm,
      zoneId: zoneForm.id,
      userId: id
    };
    try {
      let res = await fetchWithToken(`/municipalities/${id}`, dataMunicipalities, 'PUT');
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
      dispatch(startLoadMunicipalities());
    } catch (error) {
      console.log(error);
      return null;
    }

  }
};

export const deleteMunicipalitie = (id) => {
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
            let res = await fetchWithToken(`/municipalities/${id}`, null, 'DELETE');
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
        dispatch(startLoadMunicipalities());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const LoadMunicipalities = (municipalities) => ({
  type: LOAD_MUNICIPALITIES,
  payload: municipalities,
});

export const LoadMunicipalitie = (municipalitie) => ({
  type: LOAD_MUNICIPALITIE,
  payload: municipalitie,
});