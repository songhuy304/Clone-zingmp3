import React from "react";
import { Link } from "react-router-dom";
import { Play , More , Favourite } from "~/assets";
import { renderSingerLinks } from "~/contanst";
import { useMusicCommon } from "~/context/MusicContext";
import {ButtonWave} from "~/components/Block/ui";

export default function CardNgheSi({listData, data , loading}) {
  const {
    audioSettings,
    handlePlaying,
  } = useMusicCommon();
  const { songs } = audioSettings;
  const isTrue = JSON.stringify(songs) === JSON.stringify(data)

  return (
    <div className="max-w-[200px] w-full">
      <div className=" w-full h-full max-w-[200px] max-h-[200px] relative rounded-lg cursor-pointer overflow-hidden group">
        <Link
          to={`/${data?.slug_banner_singer_popular}`}
        >
          <img
            className={`
              isTrue  "brightness-75" 
             w-full h-full object-contain cursor-pointer duration-300 group-hover:brightness-75 group-hover:scale-110 transition-transform`}
            src={data?.image_music}
            alt="Sunset in the mountains"
          />
        </Link>
        <div
          className={`
            "opacity-100" 
          } absolute inset-0 flex gap-3 items-center text-white justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
        >
          <span className="pointer-events-auto">
            <Favourite />
          </span>

          <span className="pointer-events-auto hover:opacity-85">
            <Play />
          </span>

          <span className="pointer-events-auto">
            <More />
          </span>
        </div>
      </div>
      <div className="py-2">
        <Link
          to={`/${data?.slug_banner_singer_popular || data?.slug_subscribe}`}
          className="cursor-pointer hover:underline block font-bold text-sm  text-white"
        >
          {data?.name_music || "s10"}
        </Link>
      </div>
    </div>
  );
}
