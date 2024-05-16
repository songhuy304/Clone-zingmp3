import React, { useEffect , useState } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Search from '~/components/Block/Search'
import Avata from '~/components/Block/avata'
import { Button , Button2 } from '~/components/Block/ui'
import { LuSettings } from "react-icons/lu";


function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  return (
    <div
      className={`${
        scrolled ? "bg-[#fff]" : "bg-transparent"
      } sticky shadow-xl z-10 top-0 h-[70px] ease-linear duration-100 w-full `}
    >
      <div className="flex flex-grow items-center justify-between shadow-2 py-4">
        <Search />
        <div className="flex gap-5 items-center justify-center">
          <div className="flex gap-3">
            <Button>Nâng Cấp Tài Khoản</Button>
            <Button2>Tải Bản Window</Button2>
            <Tippy content="Settings">
              <div className="h-10 w-10 rounded-full bg-[#273143] flex items-center justify-center cursor-pointer hover:bg-slate-800">
                <LuSettings className="w-5 h-5 text-white" />
              </div>
            </Tippy>
              <Avata />
      
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header