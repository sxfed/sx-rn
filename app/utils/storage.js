import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';

/**
 * 本地存储
 */
export default new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null
});