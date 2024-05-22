import React from 'react'
import CardItem from '~/components/Block/ui/Card';

export default function ContainerContent({TitleSection , listData , loading}) {
 
  return (
    <>
      <h3 className="mb-5 text-xl text-white font-bold">
        {TitleSection || ""}
      </h3>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        {listData.map((item, index) => (
          <CardItem loading={loading} listData={listData} key={index} data={item} />
        ))}
      </div>
    </>
  );
}
