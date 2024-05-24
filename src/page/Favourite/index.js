import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "~/context/AuthContext";
import { toast } from "react-toastify";
import { Button } from "~/components/Block/ui";
import CardSinger from "~/components/Block/ui/CardSinger";
import { accountApi } from "~/Api";
import Index from "~/components/loading";
function Favorite() {
  const { accessToken ,favouriteMusic } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const array = favouriteMusic;
  useEffect(() => {
    setLoading(true);
    if (accessToken) {
      const fetchDataList = async () => {
        try {
          const res = await accountApi.getSongFavorite(accessToken);
          if (Array.isArray(res.data)) {
            const music = res.data.map((item) => item.music);
            setData(music);
          }
        setLoading(false);

        } catch (error) {
          console.error(error);
        }
      };
      fetchDataList();
    } else {
      navigate("..");
      toast.info("Vui lòng đăng nhập để sử dụng chức năng này!");
    }
  }, [array]);

  if(loading) {
    return <Index />
  }
  return (
    <>
      <div className="flex items-center gap-4 pt-10 ">
        {/* Lặp qua mảng và hiển thị thuộc tính subscribe */}
        <h3 className="w-fit text-2xl md:text-[38px] font-bold leading-normal text-white">
          Thư Viện
        </h3>
        <span>
          <img src="/images/PlaySingger.svg" alt="" />
        </span>
      </div>
      <div className="pt-6">
        <div className="flex items-center min-h-[32px] border-b border-[hsla(0,0%,100%,0.1)] py-6">
          <ul className="text-white flex items-center flex-wrap text-sm font-medium">
            <li className="mr-10">Bài Hát</li>
            <li className="mr-10">Album</li>
            <li className="mr-10">MV</li>
          </ul>
        </div>
        <Button className="!p-3 mt-6 ">yêu thích</Button>
        <div className="mt-2">
          <div className="flex uppercase items-center p-2 rounded-[5px] h-[46px] border-b border-[hsla(0,0%,100%,0.1)] justify-between font-medium text-white opacity-85">
            <span>Bài hát</span>
            <span>Album</span>
            <span>Thời gian</span>
          </div>
          {data && data.map((item , index) => (
            <CardSinger listdata={data} key={index} data={item} isThuvien={true} />

          ))}
         
        </div>
      </div>
    </>
  );
}

export default Favorite;
