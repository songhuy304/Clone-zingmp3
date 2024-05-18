import * as httpRequest from './request';
export const SearchApi = async (query, limit = 0) => {
    const result = await httpRequest.get('search/', {
        params: {
            query: query,
            limit: limit,
        },
    });
    return result.data;
};