/* eslint-disable @next/next/no-img-element */
import { sliders } from "@/common/data";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderHome extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplaySpeed: 3500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <Slider {...settings}>
        {sliders.map((item) => {
          return (
            <img
              className="object-cover h-[100vh] w-[100vw]"
              key={item.id}
              src={item.src}
              alt="slider-image"
            />
          );
        })}
      </Slider>
    );
  }
}
