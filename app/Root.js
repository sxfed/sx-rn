import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Tab from './pages/Tab';
import ListView from './pages/Demos/ListView';

export default StackNavigator({
	Tab: {screen: Tab},
	ListView: {screen: ListView}
}, {
    initialRouteName: 'Tab',
    mode: 'card',
    headerMode: 'screen'
});

