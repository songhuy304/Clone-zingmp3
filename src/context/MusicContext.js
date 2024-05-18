import { createContext, useContext } from 'react';
import { useMusicPlayer } from './MusicProvider';


const  CommonMusicContext = createContext({});

export const AudioProvider = ({children}) => {
    const audio = useMusicPlayer();
    return <CommonMusicContext.Provider value={audio}>{children}</CommonMusicContext.Provider>;
};
export const useMusicCommon = () => useContext(CommonMusicContext);

