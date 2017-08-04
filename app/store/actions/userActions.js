import * as types from './actionTypes';

export const fetchUserInfo = mobile => ({
    type: types.FETCH_USER_INFO,
    mobile
});
