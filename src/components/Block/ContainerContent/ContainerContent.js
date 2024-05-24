import React from 'react'
import CardItem from '~/components/Block/ui/Card';
import CardNgheSi from '../ui/CardNgheSi';
export default function ContainerContent({TitleSection , listData , loading , isNgheSi}) {


  return (
    <>
      <h3 className="mb-5 text-xl text-white font-bold">
        {TitleSection || ""}
      </h3>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-6">

      {listData && listData.map((item, index) => (
          isNgheSi ? (
            <CardNgheSi loading={loading} listData={listData} key={index} data={item} />
          ) : (
            <CardItem loading={loading} listData={listData} key={index} data={item} />
          )
        ))}
       
      </div>
      

    </>
  );
}
