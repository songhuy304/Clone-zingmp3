import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import Avata from '~/components/Block/avata';
import { useAuth } from '~/context/AuthContext';
import { links } from '~/router'

export default function HeaderMobile({ setOpen }) {
    const Use = useLocation();
    const location = Use.pathname;
    const { isLogin, toggleModal, user ,logout } = useAuth();
    const handleClick = () => {
      if (!isLogin) {
        toggleModal();
        setOpen(false);
      } else {
        console.log("User is already logged in");
      }
    };
    return (
      <>
        <div className="absolute animate-fade-down animate-once animate-duration-[500ms] ease-in-out h-[50vh] top-0 right-0 left-0 shadow-lg bg-[#0f1a2e] w-full px-3 py-4">
          <div className="flex flex-col gap-12">
            <button onClick={()=>setOpen(false)} className="h-10 w-10 bg-slate-600 rounded-full p-2 flex justify-center items-center">
              <IoCloseSharp />
            </button>
            <div className="px-5 flex gap-5">
              <Avata />
              <div className="flex flex-col text-white">
                <h1 className="text-sm font-semibold ">
                  {user?.user_name || ""}
                </h1>
                {user ? (
                  <button
                    onClick={logout}
                    className="text-sm px-12 bg-[#158370] text-white rounded-[20px] font-semibold leading-5 w-full h-10 "
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={handleClick}
                    className="text-sm px-12 bg-[#158370] text-white rounded-[20px] font-semibold leading-5 w-full h-10 "
                  >
                    Login
                  </button>
                )}

              </div>
            </div>
            <nav>
        <ul className="font-bold text-white">
          {links
            .filter((link) => link.layout === 1)
            .map((link, index) => (
              <li
                key={index}
                className={`${
                  link.path === location
                    ? "bg-[#323c4d] border-l-4 border-[#158370] opacity-100"
                    : "opacity-80"
                }  hover:opacity-100 `}
              >
                <Link
                  to={link.path}
                  className="flex items-center text-sm font-bold px-5 py-3 gap-3"
                >
                  {link.icon}
                  <span className="">{link.name}</span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
          </div>
        </div>
      </>
    );
 
}
