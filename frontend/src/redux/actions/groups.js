import { fetchWithToken } from '../../helpers/fetch';
import { LOAD_GROUPS, LOAD_GROUP, LOAD_GROUP_SCHEDULES, LOAD_GROUPS_SCHEDULES} from '../types';

import Swal from 'sweetalert2';

export const startLoadGroups = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/groups', {});
    let data = await resp.json();
    let groups = data['groups'];
    dispatch(LoadGroups(groups));
  };
};

export const findGroup = (id) => {
  if(id == null){
    return async (dispatch) => {
      dispatch(LoadGroup(null));
    };
  }else{
    return async (dispatch) => {
      let resp = await fetchWithToken(`/groups/${id}`, {});
      let data = await resp.json();
      dispatch(LoadGroup(data));
    };
  }
};

export const createGroup = (nameForm, stateForm, usabilityForm) => {
  return async (dispatch) => {
    let dataGroups = {
      name: nameForm,
      state: stateForm,
      usability: usabilityForm,
    };

    try {
      let res = await fetchWithToken('/groups', dataGroups, 'POST');
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
      dispatch(startLoadGroups());
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};


export const editGroup = (id, nameForm, stateForm, usabilityForm) => {
  return async (dispatch) => {
     let dataGroups = {
      name: nameForm,
      state: stateForm,
      usability: usabilityForm,
      userId: id
    };
      try {
        let res = await fetchWithToken(`/groups/${id}`, dataGroups, 'PUT');
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
      dispatch(startLoadGroups());
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};

export const deleteGroup = (id) => {
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
            let res = await fetchWithToken(`/groups/${id}`, null, 'DELETE');
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
        dispatch(startLoadGroups());
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  }
};

export const startLoadGroupsSchedules = () => {
  return async (dispatch) => {
    let resp = await fetchWithToken('/groups/schedules', {});
    let data = await resp.json();
    dispatch(LoadGroupsSchedules(data));
  }
};

export const startLoadGroupSchedules = (id) => {
  return async (dispatch) => {
      let resp = await fetchWithToken(`/groups/schedules/${id}`);
      let data = await resp.json();
      dispatch(LoadGroupSchedules(data.group));
  }
};
 
export const LoadGroups = (groups) => ({
  type: LOAD_GROUPS,
  payload: groups,
});

export const LoadGroup = (group) => ({
  type: LOAD_GROUP,
  payload: group,
});

export const LoadGroupsSchedules = (groupsSchedules) => ({
  type: LOAD_GROUPS_SCHEDULES,
  payload: groupsSchedules,
});

export const LoadGroupSchedules = (groupSchedules) => ({
  type: LOAD_GROUP_SCHEDULES,
  payload: groupSchedules,
});