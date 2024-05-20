import React , { useState } from 'react'
import Dropdown from './dropdown';
const Avata = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
};
  return (
    <>
      <div className="relative inline-block">
        {/* Dropdown toggle button */}
        <div
          onClick={toggleDropdown}
          className="cursor-pointer relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 transition duration-300 ease-in-out"
        >
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1 transition-transform duration-300 ease-in-out"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        {isOpen  && <Dropdown />}
        
      </div>
    </>
  );
}

export default Avata