import MockAdapter from 'axios-mock-adapter';
import fetch from 'sx-fetch/src';

import mockList from './mock-list';

const mock = new MockAdapter(fetch.mockInstance);

mockList(mock);