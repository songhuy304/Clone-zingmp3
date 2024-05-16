import React from 'react'

function Button({children}) {
  return (
    <button className="bg-[#158370] hover:bg-[#2d5d54] text-white text-sm py-[10px] font-bold px-5 rounded-full">
      {children}
    </button>
  );
}

export default Button