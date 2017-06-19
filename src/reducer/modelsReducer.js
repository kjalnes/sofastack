import { SAVE_MODEL_SUCCESS, UPDATE_MODEL_SUCCESS, DELETE_MODEL_SUCCESS } from '../constants';
const defaultState = [];

const modelsReducer = (state = defaultState, action) =>{
    switch(action.type) {
        case SAVE_MODEL_SUCCESS:
            return [...state, action.model];
        case UPDATE_MODEL_SUCCESS:
            return state.map( model => {
                if (model.id === action.model.id) {
                    model = action.model
                }
                return model;
            });
        case DELETE_MODEL_SUCCESS:
            return state.filter( model => {
                if(model.id !== action.id) {
                    return model
                }
            });
    }
    return state;
};

export default modelsReducer;

