import { FETCH_USER_INFO } from '../actions/actionTypes';

const user = {
    userName: '史朝军',
    mobile: '19874747567'
};

export const userInfo = (state = {}, action) => {
    switch(action.type) {
        case FETCH_USER_INFO:
            return user
        default:
            return state
    }
};
