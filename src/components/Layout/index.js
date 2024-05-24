import React from 'react'
import Header from '~/components/Layout/Header'
import Sidebar from '~/components/Layout/Sidebar'
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AudioProvider } from '~/context/MusicContext';
import LoginRegister from '~/page/LoginRegister';

function Layout({children}) {
  return (
    <>
        <AudioProvider>
          <div className="flex mb-[90px] h-[calc(100vh_-_90px)] w-screen bg-[#0f1a2e]">
              <Sidebar />
              <div className='w-full xl:w-[calc(100%_-_240px)] px-2 lg:px-[60px] overflow-scroll'>
                <Header />
                <div className='h-100% mt-[80px]'>{children}</div>
              </div>
          </div>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />

          <LoginRegister />
        </AudioProvider>
    </>
  );
}

export default Layout