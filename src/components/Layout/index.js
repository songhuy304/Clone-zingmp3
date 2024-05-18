import React from 'react'
import Header from '~/components/Layout/Header'
import Sidebar from '~/components/Layout/Sidebar'
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AudioProvider } from '~/context/MusicContext';
function Layout({children}) {
  return (
    <>
      <AudioProvider>
        <div className="flex bg-[#0f1a2e]">
          <Sidebar />
          <div className="w-full max-w-screen-xl sm:ml-[64px] lg:ml-[240px] pb-[90px] min-h-screen flex flex-col">
            <Header />
            {children}
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
      </AudioProvider>
    </>
  );
}

export default Layout