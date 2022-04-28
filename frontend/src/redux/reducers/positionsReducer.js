import { LOAD_POSITIONS, LOAD_POSITION } from '../types';

const initState = {
    positions: [],
    position: null,
    loading: true,
};

export const positionsReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_POSITIONS:
        return {
          ...state,
          positions: action.payload,
          loading: false,
        };
      case LOAD_POSITION:
        return {
          ...state,
          position: action.payload,
          loading: false,
        } 
      default:
        return state;
    }
  };