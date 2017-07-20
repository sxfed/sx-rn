import React, {Component, PureComponent} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Button, WhiteSpace} from 'antd-mobile';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class About extends Component {
	static navigationOptions = {
		title: '长列表'
	}

	state = {
		selected: (new Map(): Map<string, boolean>)
	}

	renderItem = ({item}) => (
		<ListItem
			handleOnPress={this.handleOnPress}
		>
			<Text key={item.key}>{item.title}</Text>
		</ListItem>
	)

	handleOnPress = () => {

	}

	render() {
		console.log(this.state.selected);
		return (
			<View
				style={{flex: 1}}
			>
				<FlatList>

				</FlatList>
			</View>
		);
	}
}

class ListItem extends PureComponent {
	render() {
		return (
			<TouchableOpacity
				{...this.props}
				onPress={this.props.handleOnPress}>
			</TouchableOpacity>
		);
	}
}