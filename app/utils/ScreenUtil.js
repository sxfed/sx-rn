/**
 * 屏幕适配工具类
 */

import { Dimensions, PixelRatio } from 'react-native';
import { BASE_WIDTH } from '../config/theme.conf';

/* 设备宽度 */
export const deviceWidth = Dimensions.get('window').width;

/* 设备高度 */
export const deviceHeight = Dimensions.get('window').height;

/* dpr */
export const dpr = PixelRatio.get();

/**
 * 根据基准宽度计算实际像素
 * @param  {Number} width 设计像素
 * @return {[type]}   实际像素
 */
export const px = width => Math.floor(deviceWidth / BASE_WIDTH * width);
