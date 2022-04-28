import { LOAD_FORMATIONPROGRAMS, LOAD_FORMATIONPROGRAM } from '../types';

const initState = {
    formationPrograms: [],
    formationProgram: null,
    loading: true,
};

export const formationProgramsReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_FORMATIONPROGRAMS:
        return {
          ...state,
          formationPrograms: action.payload,
          loading: false,
        };
      case LOAD_FORMATIONPROGRAM:
        return {
          ...state,
          formationProgram: action.payload,
          loading: false,
        } 
      default:
        return state;
    }
  };