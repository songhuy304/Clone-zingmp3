import React from 'react'
import CardTop from "../ui/CardTop";

export default function SearchItem({listdata}) {
  return (
    <>
        <h4 className="text-white font-semibold px-2 pb-4">Đề xuất cho bạn</h4>
        {listdata &&  listdata.map((_ , index) => (
            <CardTop key={index} data={_} />
        ))}
    </>
  )
}
