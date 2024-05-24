import React, { useEffect, useState } from 'react'
import CardNew from '../ui/CardNew'
import { useKeenSlider } from 'keen-slider/react' 
import { newSongApi } from '~/Api'; // Import your API function

export default function NewMusic() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await newSongApi(12, 2);
            setData(res); // Update data state with API response data or an empty array
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

      const [sliderRef, instanceRef] = useKeenSlider(
        {
          loop: true,
          drag: true,
    
          slides: {
            perView: 3,
            spacing: 15,
          },
          breakpoints: {
            "(max-width: 480px)": {
              slides: { perView: 1, spacing: 10 },
              drag: true,
            },
    
            "(min-width: 680px)": {
              slides: { perView: 2, spacing: 10 },
            },
            "(min-width: 1280px)": {
              slides: { perView: 3, spacing: 15 },
            },
          },
        },
        
      );
      return (
        <>
          <h3 className="mb-5 text-xl text-white font-bold">Mới ra</h3>
          <div ref={sliderRef} className="keen-slider">
            {data.map((item, index) => (
              <CardNew
                listData={data}
                key={index}
                classname={`keen-slider__slide number-slide${index + 1}`}
                data={item}
                index={index + 1}
              />
            ))}
          </div>
        </>
      );
}
