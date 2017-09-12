import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {Button} from 'antd-mobile';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {getIcon} from '../../config/icon.conf';
import NavigationUtil from '../../utils/NavigationUtil';

export default class About extends Component {
	static navigationOptions = {
		title: 'About',
		tabBarLabel: 'About',
		tabBarIcon: ({focused, tintColor}) => {
			return <Ionicons name={getIcon('about', focused)} size={26} color={tintColor}/>
		}
	}

	handleLogOutClick = () => {
		NavigationUtil.reset(this.props.navigation, 'Login');
	}

	render() {
		return (
			<View>
				<Button onClick={this.handleLogOutClick}>退出</Button>
			</View>
		);
	}
}