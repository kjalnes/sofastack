import { SAVE_MODEL_SUCCESS } from '../constants';

const saveModel = (model) => ({
    type: SAVE_MODEL_SUCCESS,
    model
});

export { saveModel };
