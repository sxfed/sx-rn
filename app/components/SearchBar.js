import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		const { defaultValue = '' } = props;
		this.state = {
			value: defaultValue
		}
	}

	/**
	 * 修改事件
	 * @param  {String} value 输入框值
	 * @return {void}
	 */
	onChange = value => {
		const { onChange = () => {} } = this.props;
		this.setState({value});
		onChange(value);
	}

	/**
	 * 提交事件
	 * @return {void}
	 */
	onSubmit = () => {
		const { onSubmit = () => {} } = this.props;
		onSubmit(this.state.value);
	}

	render() {
		const {
			placeholder = '搜索',
			placeholderTextColor = '#999',
			backgroundColor = '#fff',
			inputBackgroundColor = '#f5f5f5',
			textColor = '#555',
			style = {},
			inputStyle = {},
			icon = undefined,
			returnKeyType = 'search',
			iconColor = '#666',
			iconSize = 22,
			showCancel = false,
			onCancel = () => {},
			cancelTextColor = '#666',
			cancelTextSize = 14,
			onChange = () => {},
			...otherProps,
		} = this.props;

		return (
			<View style={[styles.box, {backgroundColor}, style]}>
				<View style={[styles.inputBox, {backgroundColor: inputBackgroundColor}]}>
					{
						icon || <EvilIcons name="search" color={iconColor} size={iconSize}/>
					}
					<TextInput
						placeholder={placeholder}
						returnKeyType={returnKeyType}
						underlineColorAndroid="transparent"
						placeholderTextColor={placeholderTextColor}
						style={[styles.input, {color: textColor}, inputStyle]}
						onSubmitEditing={this.onSubmit}
						onChangeText={this.onChange}
						clearButtonMode="while-editing"
						{...otherProps}
					/>
				</View>
				{
					showCancel ?
					<TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
						<Text style={{fontSize: cancelTextSize, color: cancelTextColor}}>取消</Text>
					</TouchableOpacity> : undefined
				}
			</View>
		);
	}
}



const styles = StyleSheet.create({
	box: {
		padding: 8,
		flexDirection: 'row',
		alignItems: 'center',
	},
	inputBox: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 5,
		paddingLeft: 3,
		paddingRight: 3,
	},
	input: {
		height: 26,
		flex: 1,
		fontSize: 14,
		padding: 0,
		paddingLeft: 4,
		backgroundColor: 'transparent'
	},
	cancelBtn: {
		paddingLeft: 10,
	}
});