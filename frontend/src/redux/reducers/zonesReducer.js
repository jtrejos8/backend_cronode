import { LOAD_ZONES, LOAD_ZONE } from '../types';

const initState = {
    zones: [],
    zone: null,
    loading: true,
};

export const zonesReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_ZONES:
        return {
          ...state,
          zones: action.payload,
          loading: false,
        };
      case LOAD_ZONE:
        return {
          ...state,
          zone: action.payload,
          loading: false,
        } 
      default:
        return state;
    }
  };