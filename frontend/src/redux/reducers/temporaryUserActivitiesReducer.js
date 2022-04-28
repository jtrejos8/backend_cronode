import { LOAD_TEMPORARYUSERACTIVITIES, LOAD_TEMPORARYUSERACTIVITIE } from '../types';

const initState = {
    temporaryUserActivities: [],
    temporaryUserActivitie: null,
    loading: true,
};

export const temporaryUserActivitiesReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_TEMPORARYUSERACTIVITIES:
        return {
          ...state,
          temporaryUserActivities: action.payload,
          loading: false,
        };
      case LOAD_TEMPORARYUSERACTIVITIE:
        return {
          ...state,
          temporaryUserActivitie: action.payload,
          loading: false,
        } 
      default:
        return state;
    }
  };