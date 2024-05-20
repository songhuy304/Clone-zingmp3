import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "~/context/AuthContext";

export default function Dropdown() {
  const { isLogin, toggleModal, user } = useAuth();

  const handleClick = () => {
    if (!isLogin) {
      toggleModal();
    } else {
      console.log("User is already logged in");
    }
  };

  return (
    <div className="absolute right-0 z-20 w-[300px] h-[300px] py-2 mt-2 scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 overflow-y-scroll bg-[#173b45] text-white rounded-md shadow-xl dark:bg-gray-800 transition duration-300 ease-in-out">
      <a
        href="/"
        className="flex items-center p-3 -mt-2 text-sm transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition duration-300 ease-in-out"
      >
        <img
          className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
          src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
          alt="jane avatar"
        />
        <div className="mx-1">
          <h1 className="text-sm font-semibold ">.</h1>
          <p className="text-sm ">.</p>
        </div>
      </a>
      <hr className="border-gray-200 dark:border-gray-700" />

      <div className="w-full px-3">
        {user ? (
          <button
            onClick={handleClick}
            className="mt-2 mb-5 mx-2 bg-[#158370] text-white rounded-[20px] font-semibold leading-5 w-full h-10 "
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="mt-2 mb-5 mx-2 bg-[#158370] text-white rounded-[20px] font-semibold leading-5 w-full h-10 "
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
