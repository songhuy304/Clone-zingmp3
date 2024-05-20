import React, { useEffect, useState } from 'react'
import CardSinger from '~/components/Block/ui/CardSinger';
import { useParams } from 'react-router-dom';
import { SearchApi } from '~/Api';
export default function SingerDetail() {

  const [dataParam, setDataParam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug_name_singer } = useParams();
  const userSinger = dataParam && dataParam.length > 0 ? dataParam[dataParam.length - 1]?.name_singer : null;

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        setLoading(true);
        const data = await SearchApi(slug_name_singer);
        setDataParam(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtistData();
  }, [slug_name_singer]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="w-full bg-[rgba(16,31,63,0.8)] pt-20 pb-10">
        <div className="flex px-14">
          <div className="max-w-[140px] max-h-[140px] overflow-hidden rounded-full mr-8">
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/b/f/1/fbf16d7352a3eea6be8cf5d4b217516d.jpg"
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 ">
             {/* Lặp qua mảng và hiển thị thuộc tính subscribe */}
             
                <h3 className="w-fit text-[60px] font-bold leading-normal text-white">
                 {userSinger}
                </h3>
          
              <span>
                <img src="/images/PlaySingger.svg" alt="" />
              </span>
            </div>
            <div className="flex gap-4 items-center font-medium text-sm text-white">
              <span>200.000 người quan tâm</span>
              <button className="h-[28px] px-6 py-1 text-xs border border-gray-600 rounded-full hover:opacity-90">
                Quan tâm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 px-14">
        <h3 class="mb-5 text-xl text-white font-bold">Bài Hát Nổi Bật</h3>
        <div className="grid grid-cols-2 gap-x-2">
          
        {dataParam.map((item ,index) => (
          <CardSinger data={item} key={index} />
        ))}
        </div>
      </div>
    </div>
  );
}
