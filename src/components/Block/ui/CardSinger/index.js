import React, { useEffect } from 'react'
import { More, Play } from '~/assets';
import { renderSingerLinks } from '~/contanst';
import { useMusicCommon } from '~/context/MusicContext';
import { ButtonWave } from '~/components/Block/ui';

export default function CardSinger({data}) {
  const {
    audioSettings,
    handlePlaying,
  } = useMusicCommon();
  const { songs } = audioSettings;

  return (
    <div
      className={`${
        JSON.stringify(songs) === JSON.stringify(data)
          ? "bg-[rgba(0,0,0,0.25)]"
          : ""
      } w-full mx-auto p-2 group/item hover:bg-[rgba(0,0,0,0.25)] rounded-lg border-b border-[hsla(0,0%,100%,.1)]`}
    >
      <div className="flex gap-3 rounded-xl items-center justify-between">
        <div className="flex gap-3 shrink-[1] grow w-[calc(100%_-_112px)]">
          <div className="relative w-[40px] h-[40px] rounded-lg overflow-hidden flex-shrink-0">
            <img
              className="group-hover/item:brightness-50 w-full h-full object-cover object-center transition duration-50"
              loading="lazy"
              src={
                data?.image_music ||
                "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/b/f/1/fbf16d7352a3eea6be8cf5d4b217516d.jpg"
              }
              alt=""
            />
            $
            {JSON.stringify(songs) === JSON.stringify(data) ? (
              <span>
                {" "}
                <ButtonWave isButton={false} />
              </span>
            ) : (
              <button
                onClick={() => handlePlaying(data)}
                className="group/edit invisible group-hover/item:visible absolute inset-0 m-auto flex items-center justify-center w-6 h-6 text-white "
              >
                <Play />
              </button>
            )}
          </div>
          <div className="flex flex-col justify-center overflow-hidden leading-tight text-sm w-full">
            <span className="font-bold text-white hover:text-[#158370]">
              {data?.name_music || "Sơ tubfg"}
            </span>
            <div className="line-clamp-1">
              {renderSingerLinks(data?.name_singer) || "Son tường"}
            </div>
          </div>
        </div>
        <div className='flex grow-0 shrink-0 basis-auto'>
          <span className="hidden group/edit group-hover/item:block">
            <More />
          </span>
          <span className="text-white opacity-70 text-sm group/edit block  group-hover/item:hidden">
            {data?.time_format || "3:09"}
          </span>
        </div>
      </div>
    </div>
  );
}
