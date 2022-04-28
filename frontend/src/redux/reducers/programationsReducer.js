import { LOAD_PROGRAMATIONS, LOAD_PROGRAMATION } from '../types';

const initState = {
    programations: [],
    programation: null,
    loading: true,
};

export const programationsReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_PROGRAMATIONS:
        return {
          ...state,
          programations: action.payload,
          loading: false,
        };
      case LOAD_PROGRAMATION:
        return {
          ...state,
          programation: action.payload,
          loading: false,
        } 
      default:
        return state;
    }
  };