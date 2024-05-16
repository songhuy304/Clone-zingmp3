import React from 'react'
import Header from '~/components/Layout/Header'
import Sidebar from '~/components/Layout/Sidebar'
import Footer from './Footer';

function Layout({children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-[240px] pb-[90px] min-h-screen px-14 bg-[#0f1a2e] flex flex-col">
          <Header />
         {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout