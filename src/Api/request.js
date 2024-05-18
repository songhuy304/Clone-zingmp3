import axios from 'axios';

export const request = axios.create({
    baseURL: "https://api-kaito-music.vercel.app/api",
});
export const get = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res.data;
};
export const post = async (path, body = {}, header = {}) => {
    const res = await request.post(path, body, header);
    return res.data;
};