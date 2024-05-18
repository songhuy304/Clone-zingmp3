import React from "react";
import { useKeenSlider } from "keen-slider/react";
import SliderItem from "./SliderItem";
import { Banner1 } from "~/contanst";

export default function Banner() {
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

        "(min-width: 481px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(min-width: 1130px)": {
          slides: { perView: 3, spacing: 15 },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("animationStarted", nextTimeout);
        slider.on("updated", nextTimeout);
        slider.on("destroyed", clearNextTimeout); // cleanup function
      },
    ]
  );
  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {Banner1.map((item, index) => (
          <SliderItem
            key={index}
            classname={`keen-slider__slide number-slide${index + 1}`}
            item={item}
          />
        ))}
      </div>
    </>
  );
}
