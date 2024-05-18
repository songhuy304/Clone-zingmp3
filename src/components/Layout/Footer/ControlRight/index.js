import React from "react";
import style from './index.module.css'
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import { FaRegWindowRestore } from "react-icons/fa";
import { LuVolume2, LuVolumeX } from "react-icons/lu";
import Tippy from "@tippyjs/react";
import { useMusicCommon } from "~/context/MusicContext";

export default function ControlRight() {
  const {
    audioSettings,
    handleOnclickVolumeChange,
    onChangeVolume,
  } = useMusicCommon();
  return (
    <div className="flex justify-end items-center gap-2 h-full">
      <Tippy content="Xem lời bài hát">
        <button className="rounded-full p-1 lg:p-3 text-white hover:bg-[#273143]">
          <LiaMicrophoneAltSolid />
        </button>
      </Tippy>
      <Tippy content="Chế độ cửa sổ">
        <button className="rounded-full p-1 lg:p-3 text-white hover:bg-[#273143]">
          <FaRegWindowRestore />
        </button>
      </Tippy>
      <button onClick={handleOnclickVolumeChange} className="rounded-full p-1 lg:p-3 text-white hover:bg-[#273143]">
      {audioSettings.soundMute ? <LuVolumeX /> :  <LuVolume2 /> }
      </button>
      <input
            type='range'
            className={style.range}
            value={audioSettings.soundChange}
            onChange={onChangeVolume}
            max={100}
          />

    </div>
  );
}
