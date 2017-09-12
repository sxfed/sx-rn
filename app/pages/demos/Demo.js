import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {List, WhiteSpace} from 'antd-mobile';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {getIcon} from '../../config/icon.conf';

/**
 * demo 页面列表
 * @type {Array}
 */
const DEMO_LIST = [
	{title: 'FlexView', routeName: 'FlexViewDemo'},
	{title: 'Tabs', routeName: 'TabsDemo'},
	{title: 'SearchBar', routeName: 'SearchBarDemo'},
	{title: 'Link', routeName: 'LinkDemo'},
];

export default class Demo extends Component {
	static navigationOptions = {
		title: 'Demo',
		tabBarLabel: 'Demo',
		tabBarIcon: ({focused, tintColor}) => {
			return <Ionicons name={getIcon('demo', focused)} size={26} color={tintColor}/>
		}
	}

	render() {
		const {navigate} = this.props.navigation;

		return (
			<ScrollView>
				<WhiteSpace size="lg"/>
				<List>
					{
						DEMO_LIST.map((demo, index) => (
							<List.Item
								key={index}
								arrow="horizontal"
								onClick={() => navigate(demo.routeName)}
							>
								<Text style={{marginLeft: 10}}>{demo.title}</Text>
							</List.Item>
						))
					}
				</List>
			</ScrollView>
		);
	}
}