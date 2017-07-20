import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';

import Home from './Home';
import DemoPage from './Demos/Demo';
import AboutPage from './About/About';

/**
 * 首页导航
 * @type {Object}
 */
export default TabNavigator({
	Home: {screen: Home},
	DemoPage: {screen: DemoPage},
	AboutPage: {screen: AboutPage}
});