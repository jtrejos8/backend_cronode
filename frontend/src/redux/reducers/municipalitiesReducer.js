import { LOAD_MUNICIPALITIES, LOAD_MUNICIPALITIE } from '../types';

const initState = {
    municipalities: [],
    municipalitie: null,
    loading: true,
};

export const municipalitiesReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_MUNICIPALITIES:
        return {
          ...state,
          municipalities: action.payload,
          loading: false,
        };
      case LOAD_MUNICIPALITIE:
        return {
          ...state,
          municipalitie: action.payload,
          loading: false,
        } 
      default:
        return state;
    }
  };