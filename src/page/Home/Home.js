import React, { useState, useEffect } from 'react';
import { toast  } from 'react-toastify';
import Banner from '~/components/Block/Banner'
import BanMuonNghe from '~/components/Block/BannerBanMuonNghe';
import NewSong from '~/components/Block/NewSong';
import NewMusic from '~/components/Block/Newmusic';


function Home() {
  
  return (
    <div className="h-full pt-6 px-4 md:px-14 w-full">
      <Banner />

      <div className='mt-12'>
        <BanMuonNghe />
      </div>

      <div className='mt-12'>
        <NewSong />
      </div>
      <div className='mt-12'>
        <NewMusic />
      </div>

    </div>
  );
}

export default Home;
