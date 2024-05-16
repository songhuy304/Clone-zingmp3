import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
export default function Shuffle() {
  return (
  <Tippy content="Phát Lại">
      <button className="rounded-full p-[3px] text-white hover:bg-[#273143]">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="26px"
          width="26px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="m400 304 48 48-48 48m0-288 48 48-48 48M64 352h85.19a80 80 0 0 0 66.56-35.62L256 256"
          ></path>
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M64 160h85.19a80 80 0 0 1 66.56 35.62l80.5 120.76A80 80 0 0 0 362.81 352H416m0-192h-53.19a80 80 0 0 0-66.56 35.62L288 208"
          ></path>
        </svg>
      </button>
  </Tippy>
  );
}
