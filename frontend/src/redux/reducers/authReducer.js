import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHEKING_FINISH } from '../types';

const initState = {
  checking: true,
  auth: false,
};
export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        username: action.payload.name,
        uid: action.payload.id,
        auth: true,
        checking: false,
      };
    case AUTH_LOGOUT: 
      return {
        ...state,
        auth: false,
        checking: false,
      }
    case AUTH_CHEKING_FINISH:
      return {
        ...state,
        checking: false,
      }
    default:
      return state;
  }
};