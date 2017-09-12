import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Linking } from 'react-native';

/**
 * 链接组件
 */
export default class Link extends Component {
	static propTypes = {
		disabled: PropTypes.bool,                /* 是否禁用链接 */
		onPress: PropTypes.func,			     /* 点击事件 */
		children: PropTypes.node.isRequired,     /* 链接文字 */
		activeOpacity: React.PropTypes.number,   /* 点击链接时的透明度 */
	}

	/**
	 * 链接的点击事件
	 * @return {void}
	 */
	_onPress = () => {
		const {
			disabled = false,
			onPress = () => {}
		} = this.props;

		if(!disabled) {
			onPress();
		}
	}

	renderChildren = () => {
		const {
			children = "",
			style = {},
			disabled = false,
		} = this.props;

		if (typeof children === 'string') {
			return (
				<Text style={[(disabled ? {color: '#bbb'} : {color: '#108ee9'}), style]}>
					{children}
				</Text>
			);
		}

		return children;
	}

	render() {
		const {
			children = "",
			style = {},
			disabled = false,
			activeOpacity
		} = this.props;

		return (
			<TouchableOpacity
				onPress={this._onPress}
				activeOpacity={activeOpacity}
			>
				{this.renderChildren()}
			</TouchableOpacity>
		);
	}
}

/**
 * 拨打电话链接组件
 */
class TelLink extends Component {
	/**
	 * 打电话
	 * @param  {Number} telCode 手机号
	 * @return {void}
	 */
	handleOpenTelClick = telCode => {
		Linking.openURL(`tel:${telCode}`);
	}

	render() {
		const { children, telCode, style = {} } = this.props;

		return (
			<Link onPress={() => this.handleOpenTelClick(telCode)} style={style}>
				{children}
			</Link>
		);
	}
}

/* 将Link的附属组件注册为Link组件的静态属性 */
Link.Tel = TelLink;