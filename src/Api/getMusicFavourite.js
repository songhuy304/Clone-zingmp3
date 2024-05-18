import * as httpRequest from './request';

export const getMusicFavourite = async (limit = 100, page) => {
    const result = await httpRequest.get('/music/favorite', {
        params: {
            _limit: limit,
            _page: page,
        },
    });
    return result.data;
};