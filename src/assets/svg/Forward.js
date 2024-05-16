import React from 'react'

export default function Forward({onClick}) {
  return (
    <button
      onClick={onClick}
      className="rounded-full p-[3px] text-white hover:bg-[#273143]"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="26px"
        width="26px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M400 64a16 16 0 0 0-16 16v136.43L151.23 77.11a35.13 35.13 0 0 0-35.77-.44C103.46 83.47 96 96.63 96 111v290c0 14.37 7.46 27.53 19.46 34.33a35.14 35.14 0 0 0 35.77-.45L384 295.57V432a16 16 0 0 0 32 0V80a16 16 0 0 0-16-16z"></path>
      </svg>
    </button>
  );
}
