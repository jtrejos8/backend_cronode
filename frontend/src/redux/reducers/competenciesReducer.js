import { LOAD_COMPETENCIES, LOAD_COMPETENCIE } from '../types';

const initState = {
    competencies: [],
    competencie: null,
    loading: true,
};

export const competenciesReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_COMPETENCIES:
        return {
          ...state,
          competencies: action.payload,
          loading: false,
        };
      case LOAD_COMPETENCIE:
        return {
          ...state,
          competencie: action.payload,
          loading: false,
        } 
      default:
        return state;
    }
  };