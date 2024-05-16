import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
export default function More({height , width}) {
  return (
    <Tippy content="Xem Thêm">
      <button className="rounded-full p-3 text-white hover:bg-[#273143]">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height={height || '1rem'}
          width={width || '1rem'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"></path>
        </svg>
      </button>
    </Tippy>
  );
}
