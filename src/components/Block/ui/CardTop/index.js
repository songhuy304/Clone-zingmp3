import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { More, Play } from '~/assets';
import { convertToMillions, renderSingerLinks } from '~/contanst';
import { useMusicCommon } from '~/context/MusicContext';

export default function CardTop({data}) {
  const {
    audioSettings,
    setAudio,
  } = useMusicCommon();
  const { songs } = audioSettings;
  const handleButtonClick = (item) => {
    setAudio((prev) => ({
      ...prev,
      songs: item,
      isPlaying:true
    }));

  };
//   const handleCanPlay = () => {
//     // Bỏ theo dõi sự kiện 'canplay' để tránh gọi nhiều lần
//     audioSettings.audioRef.current.removeEventListener(
//       "canplay",
//       handleCanPlay
//     );
//     // Gọi phương thức play()
//     audioSettings.audioRef.current.play().catch((error) => {
//       console.error("Failed to play audio:", error);
//     });
//   };
//   // useEffect để theo dõi thay đổi của audioSettings.songs
// useEffect(() => {
//   // Kiểm tra xem audioRef đã được khởi tạo và có sẵn không
//   if (audioSettings.audioRef.current) {
//     // Nếu readyState >= 2, tức là media đã sẵn sàng
//     if (audioSettings.audioRef.current.readyState >= 2) {
//       // Gọi phương thức play()
//       audioSettings.audioRef.current.play().catch(error => {
//         console.error('Failed to play audio:', error);
//       });
//     } else {
//       // Nếu không, theo dõi sự kiện 'canplay' để biết khi nào media sẵn sàng
//       audioSettings.audioRef.current.addEventListener('canplay', handleCanPlay);
//     }
//   }
// }, [audioSettings.songs]);
  const viewconvert = convertToMillions(data?.view)
  return (
    <div class="w-full max-w-[390px] mx-auto p-2 group/item hover:bg-[rgba(0,0,0,0.25)] rounded-lg border-b border-[hsla(0,0%,100%,.1)]">
      <div class="flex gap-3 rounded-xl items-center justify-between">
        <div className="flex gap-4">
          <div class="relative w-[60px] h-[60px] rounded-lg overflow-hidden flex-shrink-0">
            <img
              class="group-hover/item:brightness-50 w-full h-full object-cover object-center transition duration-50"
              loading="lazy"
              src={data.image_music || ""}
              alt=""
            />
            <button onClick={() => handleButtonClick(data)} class="group/edit invisible group-hover/item:visible absolute inset-0 m-auto flex items-center justify-center w-6 h-6 text-white ">
                <Play />
            </button>
          </div>
          <div class="flex flex-col justify-center overflow-hidden leading-tight text-sm w-full">
            <span class="font-bold text-white">{data?.name_music}</span>
            <div className='line-clamp-1'> {renderSingerLinks(data?.name_singer) || ""}</div>
            <p className="text-gray-500">{viewconvert}</p>
          </div>
        </div>
        <span className="group/edit invisible group-hover/item:visible">
          <More />
        </span>
      </div>
    </div>
  );
}
