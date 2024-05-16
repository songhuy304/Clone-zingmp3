import React from 'react'

export default function CardAlbum() {
  return (
    <div className='inline-block overflow-hidden'>
        <div className='max-w-[300px] max-h-[300px] relative rounded-lg cursor-pointer overflow-hidden group'>
          <a
            href='/'
            className='block'>
            <img
              className='w-full h-full object-contain cursor-pointer duration-300 group-hover:brightness-75 group-hover:scale-110 transition-transform'
              src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/d/2/5/ed251cf560be4747e7737b535c357f07.jpg'
              alt='Sunset in the mountains'
            />
          </a>
          <div className='absolute inset-0 flex gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
            <a
              href='/ásb'
              className='pointer-events-auto bg-white p-2 rounded'>
              Play
            </a>
            <button className='pointer-events-auto bg-white p-2 rounded'>Pause</button>
          </div>
        </div>
        <div className='py-2 flex flex-col items-center justify-center font-semibold text-blue-700'>
          <h3 className='font-bold'>zingChart</h3>
          <div className='text-xs text-gray-600'>
            <a href='/' className='cursor-pointer hover:underline hover:text-blue-700 after:content-[", "] last:after:content-[""]'>Dimz</a>
            <a href='/' className='cursor-pointer hover:underline hover:text-blue-700 after:content-[", "] last:after:content-[""]'>Dimz</a>
            <a href='/' className='cursor-pointer hover:underline hover:text-blue-700 after:content-[", "] last:after:content-[""]'>Dimz</a> 
          </div>
          <p className='text-xs text-gray-500'>920k người yêu thích</p>
        </div>
      </div>
  )
}
