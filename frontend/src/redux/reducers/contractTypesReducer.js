import { LOAD_CONTRACTTYPES, LOAD_CONTRACTTYPE } from '../types';

const initState = {
    contractTypes: [],
    contractType: null,
    loading: true,
};

export const contractTypesReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_CONTRACTTYPES:
        return {
          ...state,
          contractTypes: action.payload,
          loading: false,
        };
      case LOAD_CONTRACTTYPE:
        return {
          ...state,
          contractType: action.payload,
          loading: false,
        } 
      default:
        return state;
    }
  };