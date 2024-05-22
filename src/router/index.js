import {
  ThuVien,
  KhamPha,
  Zingchart,
  Radio,
  Album,
  Bxh,
  Chude,
  Ganday,
  Top100,
  Playlist,
  YeuThich,
} from "~/assets/index";
import Home from "~/page/Home/Home";
import Favourite from "~/page/Favourite/index";
import SingerDetail from "~/page/Singer";

export const links = [
  {
    name: "Thư Viện",
    path: "/thu-vien",
    link: true,
    icon: <ThuVien className="w-6 h-6" />,
    component: Home,
    layout: 1,
    protect: true
  },
  {
    name: "Khám Phá",
    path: "/",
    link: true,
    icon: <KhamPha className="w-6 h-6" />,
    component: Home,
    layout: 1,
    protect: false

  },
  {
    name: "Zingchart",
    path: "/zing-chart",
    link: true,
    icon: <Zingchart className="w-6 h-6" />,
    component: Favourite,
    layout: 1,
    protect: false

  },
  {
    name: "Radio",
    path: "/Radio",
    link: true,
    icon: <Radio className="w-6 h-6" />,
    component: Home,
    layout: 1,
    protect: false

  },
  {
    name: "BXH Nhạc Mới",
    path: "/moi-phat-hanh",
    link: true,
    icon: <Bxh className="w-6 h-6" />,
    component: Home,
    layout: 2,
    protect: false

  },
  {
    name: "Chủ Đề",
    path: "/chu-de",
    link: true,
    icon: <Chude className="w-6 h-6" />,
    component: Home,
    layout: 2,
    protect: false

  },
  {
    name: "Top 100",
    path: "/top100",
    link: true,
    icon: <Top100 className="w-6 h-6" />,
    component: Home,
    layout: 2,
    protect: false

  },
  {
    name: "Nghe Gần Đây",
    path: "/nghe-gan-day",
    link: false,
    icon: <Ganday className="w-6 h-6" />,
    component: Home,
    layout: 3,
    protect: true

  },
  {
    name: "Bài Hát Yêu Thích",
    path: "/bai-hat-yeu-thich",
    link: true,
    icon: <YeuThich className="w-6 h-6" />,
    component: Home,
    layout: 3,
    protect: true

  },
  {
    name: "Album",
    path: "/album",
    link: true,
    icon: <Album className="w-6 h-6" />,
    component: Home,
    layout: 3,
    protect: false

  },
  {
    name: "Playlist",
    path: "/Play-list",
    link: true,
    icon: <Playlist className="w-6 h-6" />,
    component: Home,
    layout: 3,
    protect: false

  },
  {
    name: "Playlist",
    path: "/:slug_name_singer",
    link: true,
    icon: <Playlist className="w-6 h-6" />,
    component: SingerDetail,
    layout: 0,
    protect: false

  },

];
