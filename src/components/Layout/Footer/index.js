import React from 'react'
import DetailPlaybar from './DetailPlaybar';
import ControlMid from './ControlMid';
import ControlRight from './ControlRight';

function Footer() {
  
  
  return (
    <div className="fixed bottom-0 right-0 left-0 max-w-full w-full z-50 h-[90px] bg-[#111f3b]">
      <div className="flex items-stretch w-full h-full py-2 px-5">
        {/* Detail song */}
        <div className="lg:w-[30%] flex-auto flex items-center justify-between gap-2 lg:gap-3">
          <DetailPlaybar />
        </div>

        {/* Control Mid */}
        <div className="lg:w-[40%] flex-auto max-lg:flex max-lg:justify-center ">
          <ControlMid />
        </div>

        {/* PlayControlRigt */}
        <div className="hidden lg:inline-block w-[30%] flex-auto">
          <ControlRight />
        </div>
      </div>
    </div>
  );
}

export default Footer