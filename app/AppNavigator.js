import React, { Component } from 'react';
import { Platform, BackHandler } from 'react-native';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import Login from './pages/auth/Login';
import Tab from './pages/MainTab';
import DemoPages from './pages/demos/navigation';

export const RootNavigator = StackNavigator({
    Login: {screen: Login},
    Tab: {screen: Tab},
    ...DemoPages,
}, {
    initialRouteName: 'Login',
    mode: 'card',
    headerMode: 'screen'
});

@connect(state => ({
    nav: state.nav
}))
export default class AppWithNavigationState extends Component {
    componentWillMount() {
        /* 安卓添加返回按钮监听事件 */
        if(Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBack);
        }
    }

    /**
     * 返回页面
     * @return {Boolean}
     */
    onBack = () => {
        const { dispatch, nav } = this.props;

        if(nav.index === 0) return false;
        dispatch(NavigationActions.back());
        return true;
    }

    render() {
        return (
            <RootNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })} />
        )
    }
}
