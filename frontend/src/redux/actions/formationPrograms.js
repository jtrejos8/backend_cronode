import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_FORMATIONPROGRAMS, LOAD_FORMATIONPROGRAM } from '../types';
import Swal from 'sweetalert2';

export const startLoadFormationPrograms = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/formationPrograms', {});
    let data = await resp.json();
    dispatch(LoadFormationPrograms(data));
  };
};

export const findFormationProgram = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadFormationProgram(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/formationPrograms/${id}`, {});
      let data = await resp.json();
      dispatch(LoadFormationProgram(data));
    }
  }
};

export const createFormationProgram = (codeForm, nameForm, formationTypeForm, isRegisterQualifiedForm, isRegisterQualifiedDateForm) => {
  return async (dispatch) => {

    let dataFormationPrograms = {
      code: codeForm,
      name: nameForm,
      formationTypeId: formationTypeForm.id,
      isRegisterQualified: isRegisterQualifiedForm,
      isRegisterQualifiedDate: isRegisterQualifiedDateForm,
    };
    try {
      let res = await fetchWithToken('/formationPrograms', dataFormationPrograms, 'POST');
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
      dispatch(startLoadFormationPrograms());
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};
  
  
  export const editFormationProgram = (id, codeForm, nameForm, formationTypeForm, isRegisterQualifiedForm, isRegisterQualifiedDateForm) => {
    return async (dispatch) => {

      let dataFormationPrograms = {
        code: codeForm,
        name: nameForm,
        formationTypeId: formationTypeForm.id,
        isRegisterQualified: isRegisterQualifiedForm,
        isRegisterQualifiedDate: isRegisterQualifiedDateForm,
        userId: id
      };
      try {
        let res = await fetchWithToken(`/formationPrograms/${id}`, dataFormationPrograms, 'PUT');
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
        dispatch(startLoadFormationPrograms());
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  };
  
  export const deleteFormationProgram = (id) => {
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
              let res = await fetchWithToken(`/formationPrograms/${id}`, null, 'DELETE');
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
          dispatch(startLoadFormationPrograms());
          } catch (error) {
            console.log(error);
            return null;
          }
        }
      })
    }
  };

export const LoadFormationPrograms = (formationPrograms) => ({
  type: LOAD_FORMATIONPROGRAMS,
  payload: formationPrograms,
});

export const LoadFormationProgram = (formationProgram) => ({
  type: LOAD_FORMATIONPROGRAM,
  payload: formationProgram,
});
