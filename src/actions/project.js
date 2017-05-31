import { SAVE_PROJECT_NAME_SUCCESS } from '../constants';
import axios from 'axios';

/* post creates file based on redux store */
/* window.location triggers download zip window based on path */
const downloadZip = (state) => {
   return axios.post(`/api/zip`, state)
    .then( () => {
        window.location = `/api/zip?name=${state.name}`
    });
}

const saveProjectName = (name) => ({
    type: SAVE_PROJECT_NAME_SUCCESS,
    name
});

export { saveProjectName, downloadZip };

