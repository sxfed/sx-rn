import React, {PureComponent} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Button, WhiteSpace} from 'antd-mobile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import fetch from 'sx-fetch/src';

/* 每页显示条数 */
const PAGE_SIZE = 20;

@fetch.inject()
export default class About extends PureComponent {
	static navigationOptions = {
		title: '长列表',
	}

	state = {
		selected: (new Map(): Map<string, boolean>),
		list: [],
		refreshing: false,
		pageNum: 1,
	}

	componentDidMount() {
		this.getList(1);
	}

	renderItem = ({item}) => {
		return (
			<View>
				<Text>id：{item.id}</Text>
				<Text>name：{item.name}</Text>
				<Text>address：{item.address}</Text>
			</View>
		);
	}

	getList = pageNum => {
		const {$fetch} = this.props;
		const {list} = this.state;

		this.setState({refreshing: true});
		$fetch.get('/mock/list', {
			pageSize: PAGE_SIZE,
			pageNum: 2
		}).then(({list: dataList}) => {
			this.setState({
				list: pageNum === 1 ? dataList : list.concat(dataList)
			});
		}).finally(() => {
			this.setState({refreshing: false});
		});
	}

	onRefresh = () => {
		this.getList(1);
	}

	onEndReached = () => {
		console.log(12342523423423353);
	}

	render() {
		const { list, refreshing } = this.state;

		return (
			<View style={{flex: 1}}>
				<FlatList
					data={list}
					renderItem={this.renderItem}
					onRefresh={this.onRefresh}
					refreshing={refreshing}
					onEndReachedThreshold={5}
					onEndReached={this.onEndReached}
				/>
			</View>
		);
	}
}
