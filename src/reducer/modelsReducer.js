const defaultState = [];
const defaultModel ={ name: '', attrs: [], id: null };

import { SAVE_MODEL_SUCCESS, UPDATE_MODEL_SUCCESS } from '../constants';

const modelsReducer = (state = defaultState, action) =>{
    switch(action.type) {
        case SAVE_MODEL_SUCCESS:
            return [...state, action.model];
        case UPDATE_MODEL_SUCCESS:
            console.log('state',state)
            return [...state, action.models];
    }
      return state;
};

export default modelsReducer;

