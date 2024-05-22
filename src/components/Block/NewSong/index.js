import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import CardTop from "../ui/CardTop";
import { ALL_NATIONAL, handleSelectButtonNational } from "~/contanst";
import { getTrendingDataApi } from "~/Api";
import { RenderButtonSelect, handleFilterSongTrending } from "~/Feature/handleEvent";

export default function NewSong() {
  const [dataTrending, setDataTrending] = useState([]);
  const [paramsFilter, setParamsFilter] = useState(ALL_NATIONAL);
  const [dataSelect, setDataSelect] = useState([]);
  const dataSliceRenderRender = dataSelect.slice(0, 12);
  


 // hàm này để chọn quốc gia type hiển thị nhạc
  const onHandleSelectNational = (item) => {
    // handle Select National
    const selectNational = handleSelectButtonNational(item);
    setParamsFilter(selectNational);
  }; 
useEffect(() => {
  // paramFilter  change will change dataFilter
  const dataFilter = handleFilterSongTrending(dataTrending, paramsFilter);
  setDataSelect(dataFilter);
}, [paramsFilter]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getTrendingDataApi(50);
      const dataFilter = handleFilterSongTrending(response, paramsFilter);
      setDataTrending(response);
      setDataSelect(dataFilter); // default when reload page will use paramFilter recent to render data
    };
    fetch();
  }, []);


  return (
    <>
      <div className="mb-5 items-center flex justify-between">
        <h3 className="text-xl text-white font-bold">Top View</h3>
        <div className="flex items-center gap-2 text-white uppercase font-medium opacity-70 cursor-pointer hover:opacity-100">
          <span>Tất Cả</span>
          <FaArrowRight />
        </div>
      </div>
      <div className="mb-5 flex justify-between">
        <div className="flex items-center justify-center text-white font-medium text-xs md:text-sm gap-3 md:gap-5">
          {RenderButtonSelect(paramsFilter, onHandleSelectNational)}
        </div>
      </div>
      <div className="md:grid-cols-3 grid-cols-1 grid  gap-5">
        {dataSliceRenderRender.map((item, index) => (
          <CardTop key={index} listdata={dataSliceRenderRender} data={item} />
        ))}
      </div>
    </>
  );
}
