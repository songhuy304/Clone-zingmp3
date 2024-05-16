import React , { useState } from 'react'
import { Link } from 'react-router-dom';
import { links } from '~/router'
import Navbar2 from './navbar2';
import { IoAddCircle } from "react-icons/io5";

const Sidebar = () => {
    const [open , setOpen] = useState(true);
    const [linkActive, setLinkActive] = useState("Khám Phá");
  return (
    <div
      className={`${
        open ? "w-[240px]" : "w-16"
      } h-[calc(100vh_-_90px)] bg-[#1b2639] shadow-lg fixed top-0 left-0 flex flex-col pt-5 text-white `}
    >
      <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-center items-center">
        <img
          src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
          alt=""
          className="w-[120px] object-contain"
        ></img>
      </div>
      <nav>
        <ul className="font-bold">
          {links.filter((link) => link.layout === 1).map((link, index) => (
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
      </nav>
      <div className="relative w-full">
        <div className="after:content-[''] after:block after:h-[1px] after:bg-gray-700 after:mx-5 my-3"></div>
      </div>
      {/* Navbar 2  */}
      <Navbar2 links={links} linkActive={linkActive} setLinkActive={setLinkActive}/>
      <div className="mt-auto border-t-2 border-gray-700">
        <button className="w-full flex gap-4 py-4 items-center justify-center">
          <IoAddCircle />
          <span>Tạo playlist mới</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar