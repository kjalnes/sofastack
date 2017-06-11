import { combineReducers} from 'redux';
import models from './modelsReducer';
import name from './projectPropsReducer';
import active from './activeModelReducer';

export default combineReducers({
    models,
    name,
    active
});
