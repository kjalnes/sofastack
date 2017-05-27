const defaultState ={ name: ''};

import { SAVE_PROJECT_NAME_SUCCESS } from '../constants';

const projectPropsReducer = (state = defaultState, action) =>{
    switch(action.type) {
        case  SAVE_PROJECT_NAME_SUCCESS:
            return [action.name];
    }
    return state;
};

export default projectPropsReducer;




