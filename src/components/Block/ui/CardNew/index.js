import React from 'react'
import { Link } from 'react-router-dom';
import { Play } from '~/assets';
import { extractDate, renderSingerLinks } from '~/contanst';

export default function CardNew({data , index ,classname , listdata}) {
    const CreateTime =  extractDate(data?.createdAt);
    return (
      <div
        className={`${classname} w-[380px] flex p-[5px] rounded-md shadow-lg cursor-pointer text-white bg-[#323c4d] group`}
      >
        <div className="p-2 flex text-left rounded-md w-full">
          <div className="mr-[10px] basis-auto grow-0 shrink-0">
            <div className="relative overflow-hidden rounded-md block h-[120px] w-[120px]">
              <img
                src={data?.image_music}
                className="w-full h-full object-cover group-hover:brightness-50 group-hover:scale-110 transition-transform"
                alt=""
              />
              <div className="absolute inset-0 flex gap-3 items-center text-white justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="pointer-events-auto hover:opacity-85">
                  <Play />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full w-full">
            <div>
              <h3>{data?.name_music}</h3>
              {renderSingerLinks(data?.name_singer) || ""}
            </div>
            <div className="flex justify-between items-end">
              <span className="opacity-40 text-[40px] font-black leading-none text-stroke-2">
                #{index}
              </span>
              <span className="text-right font-semibold opacity-40">
                {CreateTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}
