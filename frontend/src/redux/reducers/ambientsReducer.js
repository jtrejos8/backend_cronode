import { LOAD_AMBIENTS, LOAD_AMBIENT, LOAD_AMBIENTS_SCHEDULES, LOAD_AMBIENT_SCHEDULES} from '../types';

const initState = {
  ambients: [],
  ambient: null,
  ambientsSchedules: [],
  ambientSchedules: [],
  loading: true,
};
export const ambientsReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_AMBIENTS:
      return {
        ...state,
        ambients: action.payload,
        loading: false,
      };
    case LOAD_AMBIENT:
      return {
        ...state,
        ambient: action.payload,
        loading: false,
      } 
    case LOAD_AMBIENTS_SCHEDULES:
      return {
        ...state,
        ambientsSchedules: action.payload,
      }
    case LOAD_AMBIENT_SCHEDULES:
      return {
        ...state,
        ambientSchedules: action.payload
      }
    default:
      return state;
  }
};
