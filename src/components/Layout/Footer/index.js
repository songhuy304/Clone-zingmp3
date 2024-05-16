import React from 'react'
import DetailPlaybar from './DetailPlaybar';
import { Shuffle , Prev, Forward , Play  , Pause} from '~/assets'

function Footer() {
  
  
  return (
    <div className="fixed bottom-0 right-0 left-0 w-full z-50 py-2 px-5 h-[90px] flex items-center bg-[#111f3b]">
      <div className="flex justify-between items-center w-full">
        {/* Detail song */}
        <DetailPlaybar />

        {/* Controll */}
        <div>
          <div className="flex h-full items-center gap-10">
            <Shuffle />
            <Prev />
            <Play />
            <Forward />
          </div>
        </div>

        {/* PlayControlRigt */}
        <div>s</div>
      </div>
    </div>
  );
}

export default Footer