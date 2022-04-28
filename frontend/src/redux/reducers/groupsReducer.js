import { LOAD_GROUPS, LOAD_GROUP, LOAD_GROUPS_SCHEDULES, LOAD_GROUP_SCHEDULES} from '../types';

const initState = {
  groups: [],
  group: null,
  groupsSchedules: [],
  groupSchedules: [],
  loading: true,
};
export const groupsReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_GROUPS:
      return {
        ...state,
        groups: action.payload,
        loading: false,
      };
    case LOAD_GROUP:
      return {
        ...state,
        group: action.payload,
        loading: false,
      } 
    case LOAD_GROUPS_SCHEDULES:
      return {
        ...state,
        groupsSchedules: action.payload,
      }
    case LOAD_GROUP_SCHEDULES:
      return {
        ...state,
        groupSchedules: action.payload
      }
    default:
      return state;
  }
};
