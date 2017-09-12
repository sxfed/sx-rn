import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace } from 'antd-mobile';

import SearchBar from '../../components/SearchBar';
import styles from './styles';

export default class FlexViewDemo extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<Text style={styles.demoTitle}>SearchBar</Text>
				<SearchBar
					backgroundColor="#eee"
					inputBackgroundColor="#fff"
				/>
				<WhiteSpace/>
				<SearchBar
					backgroundColor="#eee"
					inputBackgroundColor="#fff"
					showCancel={true}
				/>
			</View>
		);
	}
}