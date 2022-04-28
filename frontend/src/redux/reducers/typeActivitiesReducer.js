import { LOAD_TYPEACTIVITIES, LOAD_TYPEACTIVITIE } from '../types';

const initState = {
    typeActivities: [],
    typeActivitie: null,
    loading: true,
};

export const typeActivitiesReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_TYPEACTIVITIES:
        return {
          ...state,
          typeActivities: action.payload,
          loading: false,
        };
      case LOAD_TYPEACTIVITIE:
        return {
          ...state,
          typeActivitie: action.payload,
          loading: false,
        } 
      default:
        return state;
    }
  };