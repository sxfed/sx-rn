import React, {Component} from 'react';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// 图标大小
const ICON_SIZE = 22;

// 图标props
const iconProps = (name) => ({
	name,
	size: ICON_SIZE,
	color: '#0066FF',
});

export default [{
	title: "长列表",
	icon: () => <MCIcons {...iconProps('format-list-bulleted')}/>,
	path: "ListView"
}, {
	title: "WebView",
	icon: () => <FontAwesome {...iconProps('html5')}/>,
	path: "WebView"
}]