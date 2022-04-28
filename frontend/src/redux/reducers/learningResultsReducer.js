import { LOAD_LEARNINGRESULTS, LOAD_LEARNINGRESULT } from '../types';

const initState = {
    learningResults: [],
    learningResult: null,
    loading: true,
};

export const learningResultsReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_LEARNINGRESULTS:
        return {
            ...state,
            learningResults: action.payload,
            loading: false,
        };
        case LOAD_LEARNINGRESULT:
        return {
            ...state,
            learningResult: action.payload,
            loading: false,
        } 
        default:
        return state;
    }
};