import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';

import Home from './home/Home';
import DemoPage from './demos/Demo';
import AboutPage from './about/About';

/**
 * 首页导航
 * @type {Object}
 */
export default TabNavigator({
	Home: {screen: Home},
	DemoPage: {screen: DemoPage},
	AboutPage: {screen: AboutPage}
}, {
	navigationOptions: {
		gesturesEnabled: false,
	}
});