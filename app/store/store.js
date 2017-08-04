import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxLogger from 'redux-logger';

import reducer from './reducers/reducer';

export default createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        reduxLogger
    )
);
