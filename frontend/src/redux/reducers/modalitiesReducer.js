import { LOAD_MODALITIES, LOAD_MODALITIE } from '../types';

const initState = {
    modalities: [],
    modalitie: null,
    loading: true,
};

export const modalitiesReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_MODALITIES:
        return {
          ...state,
          modalities: action.payload,
          loading: false,
        };
      case LOAD_MODALITIE:
        return {
          ...state,
          modalitie: action.payload,
          loading: false,
        } 
      default:
        return state;
    }
  };