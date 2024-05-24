import React, { useEffect , useState } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Search from '~/components/Block/Search'
import Avata from '~/components/Block/avata'
import { Button , Button2 } from '~/components/Block/ui'
import { LuSettings } from "react-icons/lu";
import { HiOutlineBars3 } from "react-icons/hi2";
import HeaderMobile from './headerMobile';


function Header() {
  const [open , setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30) {
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
        scrolled ? "shadow-xl bg-custom-gradient" : ""
      } fixed w-full lg:w-[calc(100%_-_240px)] z-10 top-0 right-0 h-[70px] backdrop-blur-[50px] p-4 md:px-[60px] transition-all duration-300 bg-[100%,200%]`}
    >
      {open && <HeaderMobile setOpen={setOpen} />}
      <div className="flex flex-grow items-center justify-between shadow-2">
        <HiOutlineBars3
          onClick={() => setOpen(true)}
          className="md:hidden inline-block w-8 h-8 text-white my-auto"
        />
        <Search />
        <div className="flex gap-5 items-center justify-center">
          <div className="hidden lg:flex gap-3">
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