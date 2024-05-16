import React from 'react'

export default function Button2({children}) {
  return (
    <button className="bg-[#273143] hover:text-[#3a7c71] text-[#0daf94] text-sm py-[10px] font-bold px-5 rounded-full">
      {children}
    </button>
  )
}
