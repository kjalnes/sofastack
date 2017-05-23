import { combineReducers} from 'redux';
import models from './modelsReducer';
import project from './projectPropsReducer';

export default combineReducers({
    models,
    project
});
