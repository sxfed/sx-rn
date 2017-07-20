import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Home extends Component {
	static navigationOptions = {
		header: null,
		tabBarLabel: 'Home',
		tabBarIcon: ({focused, tintColor}) => {
			let iconName = focused ? 'ios-navigate' : 'ios-navigate-outline';
			return <Ionicons name={iconName} size={26} color={tintColor}/>
		}
	}

	render() {
		return (
			<View>
				<Image source={require('../assets/images/logo.png')} style={styles.logo}/>
				<Text style={styles.title}>sx-app-react-native v1.0</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	logo: {
		width: 120,
		height: 120,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 100,
	},
	title: {
		lineHeight: 40,
		textAlign: 'center',
		color: '#777'
	}
});
