import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider } from 'react-redux';
import fetch from 'sx-fetch/src';

import AppWithNavigationState from './AppNavigator';
import store from './store/store';
import actions from './store/actions';

import './mock';

/* 初始化fetch */
fetch.init({
    baseURL: 'http://localhost:3000/api',
    onShowErrorTip: (err, errorTip) => {},
    onShowSuccessTip: (response, successTip) => {},
    isMock: (url) => {
        return url.startsWith('/mock');
    }
});

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}



