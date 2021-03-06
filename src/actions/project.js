import { SAVE_PROJECT_NAME_SUCCESS, SET_ACTIVE } from '../constants';
import { browserHistory } from 'react-router';
import axios from 'axios';

function recursiveToLowerCase(obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      recursiveToLowerCase(obj[key]);
    } else {
      obj[key] = obj[key].toLowerCase();
    }
  }
  return obj;
}

/* post creates file based on redux store */
/* window.location triggers download zip window based on path */
const downloadZip = (state) => {
  state = recursiveToLowerCase(state);
  return axios.post(`/api/zip`, state)
    .then( () => {
      window.location = `/api/zip?name=${state.name}`;
    });
};

const postToGit = (state) => {
  console.log(123);
  state = recursiveToLowerCase(state);
  return axios.post(`/api/github`, state)
    .then((stuff) => {
      console.log('stuff.data.name', stuff.data.name);
      window.location.href = `https://www.github.com/${stuff.data.name}`;
    });
};

const saveProjectName = (name) => ({
  type: SAVE_PROJECT_NAME_SUCCESS,
  name
});

const setActiveModel = (id) => ({
  type: SET_ACTIVE,
  id
});


export { saveProjectName, downloadZip, setActiveModel, postToGit };

