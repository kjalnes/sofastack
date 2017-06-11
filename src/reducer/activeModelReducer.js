import { SET_ACTIVE } from '../constants';
const defaultState = '';

const activeModelReducer = (state = defaultState, action) =>{
    switch(action.type) {
        case SET_ACTIVE:
            return action.id;
    }
    return state;
};

export default activeModelReducer;
