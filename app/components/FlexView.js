import React, { Component } from 'react';
import { View } from 'react-native';

/*
 * FlexBox 容器组件类
 *  - 代替antd-mobile 的Flex组件，解决了点击事件问题。
 */

const justifyMap = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	between: 'space-between',
	around: 'space-around',
};

const alignMap = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	stretch: 'stretch',
};

const FlexView = ({
	direction = 'row',   /* 文档流方向 */
	justify = 'start',   /* 主轴方向排列方式 */
	align = 'start',     /* 主轴垂直方向排列方式 */
	wrap = 'nowrap',     /* 换行方式 */
	style = {},          /* 样式 */
	...otherProps,
}) => (
	<View
		style={[{
			flexDirection: direction,
			justifyContent: justifyMap[justify],
			alignItems: alignMap[align],
			flexWrap: wrap,
		}, style]}
		{...otherProps}
	></View>
);

FlexView.Item = ({
	style = {},
	...otherProps,
}) => (
	<View style={[{flex: 1}, style]} {...otherProps}></View>
);

export default FlexView;
