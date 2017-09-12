import { NavigationActions } from 'react-navigation';

/*
 * navigation 工具类
 */

/**
 * reset action
 * @type {function}
 */
export const resetAction = (routeName, index = 0) => {
	let actions;

	if(typeof routeName === 'string') {
		actions = [NavigationActions.navigate({ routeName })];
	} else if(routeName instanceof Array) {
		actions = routeName.map(name =>  NavigationActions.navigate({ routeName: name }));
	} else {
		throw new Error('routeName type fail !');
	}

	return NavigationActions.reset({ index, actions });
};

/**
 * 重置navigation
 * @param  {Object} navigation navigation对象
 * @param  {Object} options    navigation跳转参数
 * @return {void}
 */
const reset = (navigation, routeName, index = 0) => {
	navigation.dispatch(resetAction(routeName, index));
};

export default {
	reset
};