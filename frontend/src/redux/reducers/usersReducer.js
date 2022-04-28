import { LOAD_USERS, LOAD_USER } from '../types';

const initState = {
    users: [],
    user: null,
    loading: true,
};

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
      case LOAD_USERS:
        return {
          ...state,
          users: action.payload,
          loading: false,
        };
      case LOAD_USER:
        return {
          ...state,
          user: action.payload,
          loading: false,
        } 
      default:
        return state;
    }
  };