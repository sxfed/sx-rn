import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Tabs from '../../components/Tabs';
import styles from './styles';

export default class FlexViewDemo extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<Text style={styles.demoTitle}>FlexView</Text>
				<Tabs underlineStyle={{backgroundColor: '#ddd'}}>
					<View tabLabel="Tab1"><Text>Tab1</Text></View>
					<View tabLabel="Tab2"><Text>Tab2</Text></View>
					<View tabLabel="Tab3"><Text>Tab3</Text></View>
				</Tabs>
			</View>
		);
	}
}