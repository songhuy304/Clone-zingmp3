import React from 'react'

export default function ButtonWave({isButton}) {
  return isButton ? (
    <button className="flex items-center justify-center h-[40px] w-[40px] rounded-[50%] border border-white">
      <span className="flex items-center justify-center">
        <div className="h-4 flex space-x-1">
          <div className="h-3 w-1 bg-white animate-wave"></div>
          <div className="h-3 w-1 bg-white animate-wave delay-100"></div>
          <div className="h-3 w-1 bg-white animate-wave delay-200"></div>
        </div>
      </span>
    </button>
  ) : (
    <div className="absolute inset-0 m-auto text-white  flex items-center justify-center">
      <span className="flex items-center justify-center">
        <div className="h-4 flex space-x-1">
          <div className="h-3 w-1 bg-white animate-wave"></div>
          <div className="h-3 w-1 bg-white animate-wave delay-100"></div>
          <div className="h-3 w-1 bg-white animate-wave delay-200"></div>
        </div>
      </span>
    </div>
  );
}
