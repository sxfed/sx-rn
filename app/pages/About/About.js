import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'antd-mobile';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class About extends Component {
	static navigationOptions = {
		title: 'About',
		tabBarLabel: 'About',
		tabBarIcon: ({focused, tintColor}) => {
			let iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
			return <Ionicons name={iconName} size={26} color={tintColor}/>
		}
	}

	render() {
		return (
			<View>
				<Button>退出</Button>
			</View>
		);
	}
}