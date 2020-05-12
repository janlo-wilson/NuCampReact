import * as ActionTypes from './ActionTypes';
import { act } from 'react-dom/test-utils';

export const Promotions = (state = {
    isLoading: true,
    errMess: null,
    promotions: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOTIONS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};
        
        case ActionTypes.PROMOTIONS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []};
        
        case ActionTypes.PROMOTIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};