import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {List, WhiteSpace} from 'antd-mobile';
import Ionicons from 'react-native-vector-icons/Ionicons';

import demoList from '../../config/demos';

export default class Demo extends Component {
	static navigationOptions = {
		title: 'Demo',
		tabBarLabel: 'Demo',
		tabBarIcon: ({focused, tintColor}) => {
			let iconName = focused ? 'ios-apps' : 'ios-apps-outline';
			return <Ionicons name={iconName} size={26} color={tintColor}/>
		}
	}

	render() {
		const {navigate} = this.props.navigation;

		return (
			<ScrollView>
				<WhiteSpace size="lg" />
				<List>
					{
						demoList.map(demo => (
							<List.Item
								thumb={<View style={{width: 30, alignItems: 'center'}}><demo.icon /></View>}
								key={demo.title}
								arrow="horizontal"
								onClick={() => navigate(demo.path)}
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