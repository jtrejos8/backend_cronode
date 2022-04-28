import { LOAD_DESPROGRAMMINGREASONS, LOAD_DESPROGRAMMINGREASON } from '../types';

const initState = {
    deprogrammingReasons: [],
    deprogrammingReason: null,
    loading: true,
};

export const deprogrammingReasonsReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_DESPROGRAMMINGREASONS:
        return {
          ...state,
          deprogrammingReasons: action.payload,
          loading: false,
        };
      case LOAD_DESPROGRAMMINGREASON:
        return {
          ...state,
          deprogrammingReason: action.payload,
          loading: false,
        } 
      default:
        return state;
    }
  };