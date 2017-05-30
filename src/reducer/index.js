import { combineReducers} from 'redux';
import models from './modelsReducer';
import name from './projectPropsReducer';

export default combineReducers({
    models,
    name
});
