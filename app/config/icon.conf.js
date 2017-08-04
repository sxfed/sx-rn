/**
 * 根据图标类型和状态获取图标
 * @param  {String} field 图标类型
 * @param  {Boolean} state 选中状态
 * @return {String}  图标
 */
export const getIcon = (type, state) => {
	return state ? iconList[type][0] : iconList[type][1];
};

/* 图标列表：0为选中，1位未选中 */
const iconList = {
	home: ['ios-navigate', 'ios-navigate-outline'], // 首页tab图标
	demo: ['ios-apps', 'ios-apps-outline'], // Demo页tab图标
	about: ['ios-information-circle', 'ios-information-circle-outline'], // '关于'页面tab图标
};