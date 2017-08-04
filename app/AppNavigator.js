import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import Login from './pages/auth/Login';
import Tab from './pages/MainTab';
import ListView from './pages/demos/ListView';

export const RootNavigator = StackNavigator({
    Login: {screen: Login},
    Tab: {screen: Tab},
    ListView: {screen: ListView}
}, {
    initialRouteName: 'Login',
    mode: 'card',
    headerMode: 'screen'
});

@connect(state => ({
    nav: state.nav
}))
export default class AppWithNavigationState extends Component {
    render() {
        return (
            <RootNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })} />
        )
    }
}
