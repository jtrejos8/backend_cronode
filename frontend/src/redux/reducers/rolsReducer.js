import { LOAD_ROLS, LOAD_ROL } from '../types';

const initState = {
    rols: [],
    rol: null,
    loading: true,
};

export const rolsReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_ROLS:
        return {
          ...state,
          rols: action.payload,
          loading: false,
        };
      case LOAD_ROL:
        return {
          ...state,
          rol: action.payload,
          loading: false,
        } 
      default:
        return state;
    }
  };