import React from 'react';
import { Link } from 'react-router-dom';

export default function Slider1({classname , item}) {
  return (
    <>
      <div
        className={`${classname} w-1/3 flex-1 overflow-hidden rounded-[8px]`}
      >
        <Link to={item?.path}>
          <img
            alt=""
            src={item?.img || 'ád'}
            className="w-full object-contain  transition"
          />
        </Link>
      </div>
    </>
  );
}
