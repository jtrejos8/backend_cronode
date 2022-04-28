import { LOAD_FORMATIONPROGRAMTYPES, LOAD_FORMATIONPROGRAMTYPE } from '../types';

const initState = {
    formationProgramTypes: [],
    formationProgramType: null,
    loading: true,
};

export const formationProgramTypesReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_FORMATIONPROGRAMTYPES:
        return {
            ...state,
            formationProgramTypes: action.payload,
            loading: false,
        };
        case LOAD_FORMATIONPROGRAMTYPE:
        return {
            ...state,
            formationProgramType: action.payload,
            loading: false,
        } 
        default:
        return state;
    }
};