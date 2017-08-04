import { combineReducers } from 'redux';

import * as userReducer from './userReducer';

import { RootNavigator } from '../../AppNavigator';

const navReducer = (state, action) => {
    const newState = RootNavigator.router.getStateForAction(action, state);
    return newState || state;
}

export default combineReducers({
    nav: navReducer,
    ...userReducer,
});
