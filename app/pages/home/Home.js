import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { getIcon } from '../../config/icon.conf';
import { px } from '../../utils/ScreenUtil';

@connect(({userInfo}) => ({userInfo}))
export default class Home extends Component {
	static navigationOptions = {
		header: null,
		tabBarLabel: 'Home',
		tabBarIcon: ({focused, tintColor}) => {
			return <Ionicons name={getIcon('home', focused)} size={26} color={tintColor}/>
		}
	}

	render() {
		return (
			<View>
				<Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
				<Text style={styles.title}>sx-rn v1.2</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	logo: {
		width: px(240),
		height: px(240),
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 100,
	},
	title: {
		lineHeight: 20,
		textAlign: 'center',
		color: '#777'
	}
});
