import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar2({ links, linkActive, setLinkActive }) {
  return (
    <div className="relative overflow-x-auto scrollbar-thin scrollbar-webkit w-full h-full">
    <div className="absolute top-0 left-0 right-0">
      <div className="relative mb-4">
        <ul className="font-bold">
          {links
            .filter((link) => link.layout === 2)
            .map((link, index) => (
              <li
                key={index}
                className={`${
                  link.name === linkActive
                    ? "bg-[#323c4d] border-l-4 border-[#158370] opacity-100"
                    : "opacity-80"
                }  hover:opacity-100 `}
                onClick={() => setLinkActive(link.name)}
              >
                <Link
                  to={link.path}
                  className="flex items-center text-sm font-bold px-5 py-3 gap-3"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
        </ul>
            <div className='px-2 py-4 rounded-lg mx-5 text-center bg-gradient-to-r from-[#5a4be7] to-[#c86dd7]'>
            <div className="text-sm mb-2 font-semibold">Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM</div>
            <a className="bg-[#ffdb00] border rounded-full border-[#ffdb00] text-black inline-block px-4 py-1 text-sm font-semibold" href="https://zingmp3.vn/vip/upgrade?src_vip=115">Nâng cấp tài khoản</a>
            </div>

        <ul className="font-bold">
          {links.filter((link) => link.layout === 3).map((link, index) => (
            <li
              key={index}
              className={`${
                link.name === linkActive
                  ? "bg-[#323c4d] border-l-4 border-[#158370] opacity-100"
                  : "opacity-80"
              }  hover:opacity-100 `}
              onClick={() => setLinkActive(link.name)}
            >
              <Link
                to={link.path}
                className="flex items-center text-sm font-bold px-5 py-3 gap-3"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
}
