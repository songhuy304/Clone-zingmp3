import React, { useState, useEffect } from 'react';
import ContainerContent from '../ContainerContent/ContainerContent'; // Assuming this is imported from your project
import { getMusicFavourite } from '~/Api'; // Import your API function

export default function BanMuonNghe() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getMusicFavourite(5, 6);
        setData(res); // Update data state with API response data or an empty array
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <ContainerContent loading={loading} listData={data} TitleSection={'Có Thể Bạn Muốn Nghe'} />
    </>
  );
}
