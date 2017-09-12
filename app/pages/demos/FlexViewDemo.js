import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FlexView from '../../components/FlexView';
import styles from './styles';
import { px } from '../../utils/ScreenUtil';

const FlexItem = FlexView.Item;

export default class FlexViewDemo extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<Text style={styles.demoTitle}>FlexView</Text>
				<View>
					<FlexView>
						<FlexItem style={_styles.flexItem}>
							<Text>FlexView.Item</Text>
						</FlexItem>
						<FlexItem style={_styles.flexItem}>
							<Text>FlexView.Item</Text>
						</FlexItem>
					</FlexView>
					<FlexView>
						<FlexItem style={_styles.flexItem}>
							<Text>FlexView.Item</Text>
						</FlexItem>
						<FlexItem style={_styles.flexItem}>
							<Text>FlexView.Item</Text>
						</FlexItem>
						<FlexItem style={_styles.flexItem}>
							<Text>FlexView.Item</Text>
						</FlexItem>
					</FlexView>
					<FlexView>
						<FlexItem style={_styles.flexItem}>
							<Text>FlexView.Item</Text>
						</FlexItem>
						<FlexItem style={_styles.flexItem}>
							<Text>FlexView.Item</Text>
						</FlexItem>
						<FlexItem style={_styles.flexItem}>
							<Text>FlexView.Item</Text>
						</FlexItem>
						<FlexItem style={_styles.flexItem}>
							<Text>FlexView.Item</Text>
						</FlexItem>
					</FlexView>
				</View>
				<Text>其他用法参考 antd-mobile 中的 Flex 组件。</Text>
			</View>
		);
	}
}

const _styles = StyleSheet.create({
	flexItem: {
		backgroundColor: '#eee',
		padding: px(20),
		margin: px(10)
	}
});