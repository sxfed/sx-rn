import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { px } from '../utils/ScreenUtil';
import * as theme from '../config/theme.conf';

/**
 * tab按钮栏容器组件
 * @type {ReactCompnent}
 */
const TabBar = props => {
	const {
		leftWidth = 0,
		rightWidth = 0,
		backgroundColor = '#fff',
		left = undefined,
		right = undefined,
	} = props;

	return (
		<View style={[styles.tab, {backgroundColor}]}>
			{
				left ?
				<View style={[styles.tabLeft, {width: leftWidth}]}>
					{left}
				</View> : undefined
			}
			<TabItem {...props} />
			{
				right ?
				<View style={[styles.tabRight, {width: rightWidth}]}>
					{right}
				</View> : undefined
			}
		</View>
	);
}

/**
 * tab 标签
 * @type {ReactCompnent}
 */
class TabItem extends Component {
	/**
	 * 渲染tab导航栏按钮
	 * @param  {Object} tab   按钮信息
	 * @param  {Number} index 序号
	 * @return {ReactComponent}
	 */
	renderItem = (tab, index) => {
		const {
			goToPage,
			activeTab,
			tabItemStyle = {},
			backgroundColor = {},
			tintColor = '#555',
			activeTintColor = theme.TAB_TINT_COLOR_ACTIVE,
		} = this.props;
		const textColor = activeTab === index ? activeTintColor : tintColor;

		return (
			<TouchableOpacity
				key={index}
				onPress={() => goToPage(index)}
				style={[styles.tabButton, {backgroundColor}]}
			>
				<Text style={[styles.tabButtonText, {color: textColor}, tabItemStyle]}>
					{tab}
				</Text>
			</TouchableOpacity>
		);
	}

	render() {
		const {
			tabs,
			containerWidth,
			scrollValue,
			leftWidth = 0,
			rightWidth = 0,
			underlineStyle = {}
		} = this.props;

		const numberOfTabs = tabs.length;
		const tabUnderlineStyle = {
			position: 'absolute',
			width: (containerWidth - leftWidth - rightWidth) / numberOfTabs,
			height: 2,
			backgroundColor: theme.TAB_TINT_COLOR_ACTIVE,
			bottom: 0,
		};

		const left = {
			transform: [
				{
					translateX: this.props.scrollValue.interpolate({
						inputRange: [0, 1,],
						outputRange: [0, (containerWidth - leftWidth - rightWidth) / numberOfTabs,],
					})
				}
			]
		};

		return (
			<View style={[styles.tab, {flex: 1, position: 'relative'}]}>
				{tabs.map(this.renderItem)}
				<Animated.View style={[tabUnderlineStyle, left, underlineStyle, ]} />
			</View>
		);
	}
}

/**
 * tab 组件类
 * @type {ReactCompnent}
 */
export default props => {
	const { onChangeTab, children, ...otherProps } = props;
	const tabProps = {
		onChangeTab
	};

	return (
		<ScrollableTabView {...tabProps} renderTabBar={() => <TabBar {...otherProps} />}>
			{children}
		</ScrollableTabView>
	);
}

const styles = StyleSheet.create({
	tab: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	tabButton: {
		flex: 1,
		alignItems: 'center'
	},
	tabButtonText: {
		padding: 14,
		fontSize: 16,
	},
	tabLeft: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: px(20),
	},
	tabRight: {
		justifyContent: 'center',
		alignItems: 'flex-end',
		paddingRight: px(20),
	}
})