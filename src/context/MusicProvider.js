import { useState, useRef, useEffect  ,memo, useCallback} from 'react';
import { handlesetLocal } from '~/Feature/handleEvent';
export function useMusicPlayer() {
  const audioRef = useRef();

  const [audioSettings, setAudio] = useState({
    currentTime: 0,
    duration: 0,
    soundSpeedIndex: 1,
    soundMute: false,
    soundChange: 50,
    isPlaying: false,
    currentSong: 1,
    audioRef: audioRef,
    currentAudioIndex: 0,
    show: false,
    songs: {
    },
    track: [],
    nextSong: false,
    prevSong: false,
  });
  
  useEffect(() => {
    const result = localStorage.getItem('song');
     if (result !== null || result !== undefined){
       const songData = JSON.parse(result); 
       setAudio((prevSettings) => ({
        ...prevSettings,
        songs: songData, // Sử dụng giá trị mới của isPlaying
      }));
     }
     else{
       return
     }
   },[]);

  const handlePlayingPause = async (song , trackList) => {
    if (audioRef?.current) {
      if (!audioSettings.isPlaying) { // Thay đổi ở đây
        if (audioRef.current.readyState >= 2) {
          // Phương tiện đã sẵn sàng, có thể gọi play()
          await audioRef?.current.play();
        }
      } else {
        await audioRef?.current.pause();
      }
      setAudio((prevSettings) => ({
        ...prevSettings,
        isPlaying: !prevSettings.isPlaying, // Sử dụng giá trị mới của isPlaying
      }));
    } else {
      console.log('Audio metadata not loaded yet, waiting...');
    }
  };
  
  
  const handlePlaying = useCallback(async (song) => {
    setAudio((prevSettings) => ({
      ...prevSettings,
      songs: song,
      isPlaying: true,
    }));

    if (audioRef.current) {
      const { name_music, image_music, name_singer, slug_name_singer , src_music } = song; // Sử dụng song thay vì audioSettings.songs
      const songLocal = {
        src_music,
        name_music,
        image_music,
        name_singer,
        slug_name_singer,
      };

      handlesetLocal(songLocal); // Đảm bảo hàm handlesetLocal được định nghĩa và có sẵn
      audioRef.current.src = song.src_music;
      audioRef.current.load(); // Load the new audio source
      audioRef.current.oncanplaythrough = async () => {
        await audioRef.current.play();
      };
    }
  }, []);
  
  // Hàm Tăng giảm âm lượng
  const onChangeVolume = useCallback((e) => {
    const newVolume = parseFloat(e.target.value) / 100;
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume === 0) {
      setAudio((prevSettings) => ({
        ...prevSettings,
        soundMute: true,
        soundChange: e.target.value,
      }));
    } else {
      setAudio((prevSettings) => ({
        ...prevSettings,
        soundMute: false,
        soundChange: e.target.value,
      }));
    }
  }, []);

  // Hàm onClickVolume
  const handleOnclickVolumeChange = () => {
    if (audioRef.current) {
      setAudio((prevSettings) => ({
        ...prevSettings,
        soundMute: !prevSettings.soundMute,
        soundChange: prevSettings.soundMute ? 0 : 0.5,
      }));
      const volume = audioSettings.soundMute ? 0.5 : 0;
      setAudio((prevSettings) => ({
        ...prevSettings,
        soundChange: prevSettings.soundMute ? 0 : 50,
      }));
      audioRef.current.volume = volume;
    }
  };

  //  phát theo thanh cuộn
  const handleSeek = (e) => {
    const currentTime = parseFloat(e.target.value);
    audioRef.current.currentTime = currentTime;
    setAudio((prevSettings) => ({
      ...prevSettings,
      currentTime: currentTime,
    }));
  };

  // Phát theo tốc độ
  const handleSpeedChange = (x) => {
    const audio = audioRef.current;
    audio.playbackRate = parseFloat(x); // cập nhật tốc độ của audio
  };

  function formatDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${minutes}:${formattedSeconds}`;
  }

  // Nextbài
  const handleNextsong = () => {
    setAudio((prev) => ({
      ...prev,
      nextSong: true,
    }));
  };
  const handlePrevsong = () => {
    setAudio((prev) => ({
      ...prev,
      prevSong: true,
    }));
  };
  const handleSkipForward = (direction) => {
    const currentTimeSkip = parseFloat(30);
    if (direction === 'skip') {
      const newCurrentTime = audioSettings.currentTime + currentTimeSkip;
      // Cập nhật currentTime của audioRef
      if (audioSettings.audioRef.current) {
        audioSettings.audioRef.current.currentTime = newCurrentTime;
      }
      // Cập nhật currentTime trong state
      setAudio((prev) => ({
        ...prev,
        currentTime: newCurrentTime,
      }));
    }
    if (direction === 'forward') {
      const newCurrentTime = audioSettings.currentTime - currentTimeSkip;
      // Cập nhật currentTime của audioRef
      if (audioSettings.audioRef.current) {
        audioSettings.audioRef.current.currentTime = newCurrentTime;
      }
      // Cập nhật currentTime trong state
      setAudio((prev) => ({
        ...prev,
        currentTime: newCurrentTime,
      }));
    }
  };

  return {
    audioSettings,
    setAudio,
    // playAudio,
    // pauseAudio,
    handlePlayingPause,
    onChangeVolume,
    handleSeek,
    handleSpeedChange,
    handleNextsong,
    handlePrevsong,
    handleOnclickVolumeChange,
    handleSkipForward,
    formatDuration,
    handlePlaying
  };
}