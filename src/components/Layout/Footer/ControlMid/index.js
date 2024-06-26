import React from "react";
import style from "./index.module.css";
import { Shuffle, Prev, Forward, Play, Pause, Phatlai } from "~/assets";
import Tippy from "@tippyjs/react";
import { useMusicCommon } from "~/context/MusicContext";
import { formatDuration } from "~/contanst";


export default function ControlMid() {
  const {
    audioSettings,
    handlePlayingPause,
    handleSeek,
    setAudio,
    handleNextsong,
    handlePrevsong,
  } = useMusicCommon();
  const {
    src_music = '',
} = audioSettings?.songs || {};

  const handleOnTimeupdate = (value) => {
    setAudio((prev) => ({
      ...prev,
      currentTime: value,
    }));
  };
  const handleOnLoadData = (value) => {
    setAudio((prev) => ({
      ...prev,
      duration: value,
    }));
  };

  const handleOnEnded = (value) => {
    setAudio((prev) => ({
      ...prev,
      isPlaying: value,
    }));
  };


  return (
    <>
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="flex gap:1 lg:gap-6 items-center flex-1">
          <Tippy content="Phát ngẫu nhiên">
            <button className="hidden lg:inline-block rounded-full p-3 text-white hover:bg-[#273143]">
              <Shuffle />
            </button>
          </Tippy>
          <button
            onClick={handlePrevsong}
            className="rounded-[50%] p-3 text-white hover:bg-[#273143]"
          >
            <Prev />
          </button>
          <button
            onClick={handlePlayingPause}
            className="rounded-full p-[3px] text-white hover:text-[#158370]"
          >
            {audioSettings.isPlaying ? <Pause /> : <Play />}
          </button>
          <button onClick={handleNextsong}
           className="lg:inline-block rounded-full p-3 text-white hover:bg-[#273143]">
            <Forward />
          </button>
          <Tippy content="Phát Lại">
            <button className="hidden lg:inline-block rounded-full p-3 text-white hover:bg-[#273143]">
              <Phatlai />
            </button>
          </Tippy>
        </div>
        <div className="hidden lg:flex items-center justify-between w-full">
          <span className="w-14 text-xs font-semibold text-center text-white opacity-50">
            {formatDuration(audioSettings.currentTime)}
          </span>
          <div className="flex items-center w-full">
            <input
              type="range"
              className={` ${style.range}`}
              max={isNaN(audioSettings.duration) ? "" : audioSettings.duration}
              value={
                isNaN(audioSettings.currentTime)
                  ? ""
                  : audioSettings.currentTime
              }
              onChange={handleSeek}
            />
          </div>
          <span className="w-14 text-xs font-semibold text-center text-white opacity-50">
            {formatDuration(audioSettings.duration)}
          </span>

          <audio
            src={src_music}
            ref={audioSettings.audioRef}
            onTimeUpdate={(e) => {
              handleOnTimeupdate(e.currentTarget.currentTime);
            }}
            onLoadedData={(e) => {
              handleOnLoadData(e.currentTarget.duration);
            }}
            onEnded={() => {
              handleOnEnded(false);
              handleNextsong();
            }}
            controls
            hidden
          />
        </div>
      </div>
    </>
  );
}
