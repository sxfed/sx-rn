import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { WingBlank, WhiteSpace } from 'antd-mobile';

import Link from '../../components/Link';
import styles from './styles';

export default class FlexViewDemo extends Component {
	onPress = () => {
		Alert.alert('提示', '这是提示消息！', [
			{ text: '取消', onPress: () => {} },
		]);
	}

	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<Text style={styles.demoTitle}>LinkDemo</Text>
				<WingBlank>
					<Text>文字链接按钮</Text>
					<WhiteSpace/>
					<Link onPress={this.onPress}>链接</Link>
				</WingBlank>
				<WhiteSpace/>
				<WingBlank>
					<Text>拨打电话链接</Text>
					<WhiteSpace/>
					<Link.Tel telCode={15310101010}>15310101010</Link.Tel>
				</WingBlank>
			</View>
		);
	}
}