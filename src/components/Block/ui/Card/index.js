import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { Play , More , Favourite } from "~/assets";
import { renderSingerLinks } from "~/contanst";
import { useMusicCommon } from "~/context/MusicContext";
export default function CardItem({data , loading}) {
  const {
    audioSettings,
    setAudio,
  } = useMusicCommon();
  const { songs } = audioSettings;
  const handleButtonClick = (item) => {
    setAudio((prev) => ({
      ...prev,
      songs: item,
    }));
  };

  return (
    <div className="max-w-[200px] w-full overflow-hidden">
      <div className="max-w-[200px] max-h-[200px] relative rounded-lg cursor-pointer overflow-hidden group">
        <Link to="/" className="block">
          <img
            className="w-full h-full object-contain cursor-pointer duration-300 group-hover:brightness-75 group-hover:scale-110 transition-transform"
            src={data?.image_music}
            alt="Sunset in the mountains"
          />
        </Link>
        <div className="absolute inset-0 flex gap-3 items-center text-white justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
          to={loading ? "/" : data?.slug_name_singer || data?.slug_name_music}
          className="block font-bold text-sm whitespace-nowrap overflow-hidden text-white"
        >
          {loading ? <Skeleton className="w-64" /> : data?.name_music}
        </Link>
        <div className="block font-medium text-sm text-gray-500 w-full overflow-hidden">
          <div className="line-clamp-2">
            {renderSingerLinks(data?.name_singer) || ""}
          </div>
        </div>
      </div>
    </div>
  );
}
