import React from "react";
import Banner from "~/components/Block/Banner";
import BanMuonNghe from "~/components/Block/BannerBanMuonNghe";
import MostSinger from "~/components/Block/MostSinger";
import NewSong from "~/components/Block/NewSong";
import NewMusic from "~/components/Block/Newmusic";

function Home() {
  return (
    <div className="">
      <Banner />
      <div className="mt-12">
        <BanMuonNghe />
      </div>
      <div className="mt-12">
        <MostSinger />
      </div>
      <div className="mt-12">
        <NewSong />
      </div>
      
      <div className="mt-12">
        <NewMusic />
      </div>
    </div>
  );
}

export default Home;
