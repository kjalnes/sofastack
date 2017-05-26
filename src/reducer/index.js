import { combineReducers} from 'redux';
import models from './modelsReducer';
import projects from './projectPropsReducer';

export default combineReducers({
    models,
    projects
});
