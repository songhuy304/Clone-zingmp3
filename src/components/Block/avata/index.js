import React , { useState } from 'react'

const Avata = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
};
  return (
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

  {/* Dropdown menu */}
  {isOpen && (
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
          <h1 className="text-sm font-semibold ">Jane Doe</h1>
          <p className="text-sm ">janedoe@example.com</p>
        </div>
      </a>
      <hr className="border-gray-200 dark:border-gray-700" />
      <a
        href="/"
        className="block px-4 py-3 text-sm capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Help
      </a>
      <a
        href="/"
        className="block px-4 py-3 text-sm capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Sign Out
      </a>
    </div>
  )}
</div>

  );
}

export default Avata