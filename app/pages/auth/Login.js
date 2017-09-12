import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button, WhiteSpace, InputItem, WingBlank, List } from 'antd-mobile';

import NavigationUtil from '../../utils/NavigationUtil';

export default class Login extends Component {
	static navigationOptions = {
		header: null,
	}

	handleLoginClick = () => {
		NavigationUtil.reset(this.props.navigation, 'Tab');
	}

	render() {
		return (
			<View style={styles.loginBox}>
				<List>
					<InputItem placeholder="账号" />
					<InputItem placeholder="密码" />
				</List>
				<WhiteSpace size="lg"/>
				<WingBlank>
					<Button type="primary" onClick={this.handleLoginClick}>登 录</Button>
				</WingBlank>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	loginBox: {
		flex: 1,
		justifyContent: 'center',
	}
});