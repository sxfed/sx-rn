import list from './data/list';

export default mock => {
    mock.onGet('/mock/list').reply(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([200, list()]);
            }, 1000);
        });
    });
};