import { SAVE_PROJECT_NAME_SUCCESS } from '../constants';

const saveProjectName = (name) => ({
    type: SAVE_PROJECT_NAME_SUCCESS,
    name
});

export { saveProjectName };

