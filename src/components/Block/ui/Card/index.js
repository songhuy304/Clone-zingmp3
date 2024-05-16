import React from "react";

export default function CardItem() {
  return (
    <div className='inline-block overflow-hidden'>
    <div className='max-w-[200px] max-h-[200px] relative rounded-lg cursor-pointer overflow-hidden group'>
      <a href='/' className='block'>
        <img
          className='w-full h-full object-contain cursor-pointer duration-300 group-hover:brightness-75 group-hover:scale-110 transition-transform' 
          src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/d/2/5/ed251cf560be4747e7737b535c357f07.jpg'
          alt='Sunset in the mountains'
        />
      </a>
      <div className='absolute inset-0 flex gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
        <a href='/ásb' className='pointer-events-auto bg-white p-2 rounded'>Play</a>
        <button className='pointer-events-auto bg-white p-2 rounded'>Pause</button>
      </div>
    </div>
    <div className='py-2'>
      <div className='font-bold text-white'>The Coldest Sunset</div>
    </div>
  </div>
  );
}
