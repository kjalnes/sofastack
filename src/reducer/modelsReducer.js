const defaultState = [];
const defaultModel ={name:'', attrs:[]}

import { SAVE_MODEL_SUCCESS } from '../constants';

const modelsReducer = (state = defaultState, action) =>{
    switch(action.type) {
        case SAVE_MODEL_SUCCESS:
            return [...state, action.model];
    }
    return state;
};

export default modelsReducer;

