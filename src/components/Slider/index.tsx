import React, { ReactNode } from "react";
import Slider from "react-slick";

type Props = {
  children: ReactNode,
  dot?: boolean,
  slidesToShow?: number,
  slidesToScroll?: number,
  dotClass?: string,
  autoplay?: boolean,
}

function NextArrow() {
  return (
    <div
      style={{ display: "none" }}
    />
  );
}

function PrevArrow() {
  return (
    <div
      style={{ display: "none" }}
    />
  );
}

export default function SliderCustom({children, dot, slidesToShow, slidesToScroll, dotClass, autoplay}:Props) {
  const settings = {
    dots: dot || false,
    infinite: true,
    autoplaySpeed: 5000,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: slidesToScroll || 1,
    autoplay: autoplay || false,
    pauseOnHover: false,
    accessibility: false,
    dotsClass: dotClass,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    easing: "ease-in-out",
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
}
