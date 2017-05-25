import { SAVE_MODEL_SUCCESS, UPDATE_MODEL_SUCCESS } from '../constants';

const updateModel = (model) => ({
    type: UPDATE_MODEL_SUCCESS,
    model
});

const saveModel = (model) => ({
    type: SAVE_MODEL_SUCCESS,
    model
});




export { saveModel, updateModel };
