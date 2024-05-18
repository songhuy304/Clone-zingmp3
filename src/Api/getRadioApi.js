import axios from 'axios';

export const getRadioApi = async () => {
    const response = await axios.get('https://zing-mp3-api.vercel.app/api/radio');
    return response?.data?.data.items; 
};
