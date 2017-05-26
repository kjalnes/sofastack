const defaultState = [];
const defaultModel ={ name: '', attrs: [], id: null };

import { SAVE_MODEL_SUCCESS, UPDATE_MODEL_SUCCESS } from '../constants';

const modelsReducer = (state = defaultState, action) =>{
    switch(action.type) {
        case SAVE_MODEL_SUCCESS:
            return [...state, action.model];
        case UPDATE_MODEL_SUCCESS:
            const models = state.map( model => {
                if (model.id === action.model.id) {
                    model = action.model
                }
                return model;
            });
            return [...models];
    }
      return state;
};

export default modelsReducer;

