import { Link } from "react-router-dom";

export const Banner1 = [
    {
      img:'https://photo-zmp3.zmdcdn.me/banner/e/0/4/c/e04c59f4ee01115eb505a821d7cf895c.jpg',
      path:'/'

    }, {
      img:'https://photo-zmp3.zmdcdn.me/banner/e/0/e/5/e0e5e9a36cf8d9d3c92957c339ce533b.jpg',
      path:'/'

    }, {
      img:'https://photo-zmp3.zmdcdn.me/banner/1/9/a/7/19a70f1ba8dd36dcb65dbb6f61984a52.jpg',
      path:'/'

    },{
      img:'https://photo-zmp3.zmdcdn.me/banner/9/e/3/2/9e32e6e45165689aaac27de70bc12ad0.jpg',
      path:'/'
    },
  ]
export const KPOP_NATIONAL = 'kpop';
export const VPOP_NATIONAL = 'vpop';
export const USUK_NATIONAL = 'usuk';
export const ALL_NATIONAL = 'all';
export const LOBAl = 'lobal';
export const BUTTON_RENDER_SELECT_NATIONAL = [
    {
        title: 'TẤT CẢ',
        type: ALL_NATIONAL,
    },
    {
        title: 'VIỆT NAM',
        type: VPOP_NATIONAL,
    },
    {
        title: 'HÀN QUỐC',
        type: KPOP_NATIONAL,
    },
    {
        title: 'ÂU MỸ',
        type: USUK_NATIONAL,
    },
    {
        title: 'QUỐC TẾ',
        type: LOBAl,
    },
];
export const handleSelectButtonNational = (item) => {
    // handle Select Button to return type
    const nationalMap = {
        // fake to map with type no need used map
        [VPOP_NATIONAL]: VPOP_NATIONAL,
        [KPOP_NATIONAL]: KPOP_NATIONAL,
        [USUK_NATIONAL]: USUK_NATIONAL,
        [LOBAl]: LOBAl,
        [ALL_NATIONAL]: ALL_NATIONAL,
    };
    const type = item.type;

    return nationalMap[type];
};
export  const convertToMillions = (number) => {
    const millionSymbol = "M";
    const thousandSymbol = "k";
    const million = 1000000; // 1 triệu
    const thousand = 1000; // 1 nghìn

    // Nếu số lớn hơn hoặc bằng 1 triệu, chuyển đổi và thêm ký hiệu triệu vào sau số
    if (number >= million) {
        const millions = Math.floor(number / million);
        return `${millions}${millionSymbol}`;
    }

    // Nếu số lớn hơn hoặc bằng 1 nghìn, chuyển đổi và thêm ký hiệu nghìn vào sau số
    if (number >= thousand) {
        const thousands = Math.floor(number / thousand);
        return `${thousands}${thousandSymbol}`;
    }

    // Nếu số nhỏ hơn 1 nghìn, chỉ trả về số đó mà không có ký hiệu nghìn
    return number.toString();
}
export function extractDate(isoString) {
    const date = new Date(isoString);
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng được tính từ 0-11, nên cần +1
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }

  export const renderSingerLinks = (name_singer) => {
    if (!name_singer) return 'Lỗi';
    const removeDiacritics = (str) => {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };
    // Tách các tên ca sĩ bằng dấu phẩy và loại bỏ khoảng trắng thừa
    const singers = name_singer.split(',').map(name => name.trim());
    console.log("🚀 ~ renderSingerLinks ~ singers:", singers)
    // Render các thẻ <Link> cho từng tên ca sĩ
    return singers.map((singer, index) => (
      <Link
        key={index}
        to={`/${singer.replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
        state={{singer_name: singer}}
        className="line-clamp-1 inline-block cursor-pointer text-gray-600 text-xs font-semibold hover:underline hover:opacity-100"
      >
        {singer},
      </Link>
    ));
  };
  function toSlug(str) {
    // Thay thế các khoảng trắng bằng dấu gạch ngang
    let slug = str.replace(/\s+/g, '-').toLowerCase();
    
    // Loại bỏ dấu tiếng Việt
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    return slug;
}
  export function formatDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${minutes}:${formattedSeconds}`;
  };


  export function formatRegexSearch(value){
    let newQuery = value
    ?.trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
    return newQuery;
  }
  export const BANNER_SINGER_POPULAR = [
    {
      image_music: '/images/sontung.jpg',
        name_singer: 'Sơn Tùng',
        slug_banner_singer_popular: 'son-tung-m-tp',
        name_music: 'Những Bài Hát Hay Nhất Của Sơn Tùng',
    },
    {
      image_music: '/images/Alan.jpg',
        name_singer: 'Alan Walker',
        slug_banner_singer_popular: 'alan-walker',
        name_music: 'Những Bài Hát Hay Nhất Của Alan Walker',
    },
    {
        image_music: '/images/banner-jack-97.jpg',
        name_singer: 'Jack 97',
        slug_banner_singer_popular: 'jack',
        name_music: 'Những Bài Hát Hay Nhất Của Jack',
    },
    {
        image_music: '/images/banner-phan-manh-quynh.jpg',
        name_singer: 'Phan Mạnh Quỳnh',
        slug_banner_singer_popular: 'phan-manh-quynh',
        name_music: 'Những Bài Hát Hay Nhất Của Phan Mạnh Quỳnh',
    },
    {
        image_music: '/images/le-bao-binh-3.jpeg',
        name_singer: 'Lê Bảo Bình',
        slug_banner_singer_popular: 'le-bao-binh',
        name_music: 'Những Bài Hát Hay Nhất Của Lê Bảo Bình',
    },
    {
      image_music: '/images/banner-ho-quang-hieu.jpg',
      name_singer: 'Hồ Quang Hiếu',
      slug_banner_singer_popular: 'ho-quang-hieu',
      name_music: 'Những Bài Hát Hay Nhất Của Lê Bảo Bình',
  }
];
