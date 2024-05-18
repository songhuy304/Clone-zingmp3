import React from 'react'
import { Link } from 'react-router-dom';
import { Favourite , More} from '~/assets'
import { useMusicCommon } from '~/context/MusicContext';
export default function DetailPlaybar() {
  const { audioSettings } = useMusicCommon();
  const { name_music , image_music , name_singer , slug_name_singer } = audioSettings?.songs;


  return (
    <>
      <div className="cursor-pointer w-10 h-10 lg:min-w-16 lg:min-h-16 overflow-hidden items-center justify-center lg:rounded rounded-full bg-white px-1 py-1 lg:flex">
        <img
          src={
            image_music || 'https://res.cloudinary.com/phuockaito/image/upload/v1664964713/image_music/oam3yetbai0esn8gednk.jpg'
          }
          alt="123"
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-[1px] md:gap-[3px] lg:max-w-[190px] lg:w-full">
        <span className="line-clamp-1 cursor-pointer text-sm font-semibold text-[#EBEBEB] hover:underline md:line-clamp-2">
          {name_music || 'Lỗi'}
        </span>
        <Link to={`/${slug_name_singer}`}
          href="/"
          className="line-clamp-1 cursor-pointer text-gray-600 text-xs font-semibold hover:underline hover:opacity-100"
        >
         {name_singer || 'Lỗi'}
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Favourite />
        <span className='hidden lg:inline-block'><More /></span>
      </div>
    </>
  );
}
