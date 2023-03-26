/* eslint-disable @next/next/no-img-element */
import { reviews } from "@/common/data";
import Rating from "@/components/Rating";
import SliderCustom from "@/components/Slider";
import PageTitle from "@/components/common/PageTitle";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function Testimonials() {
  return (
    <div>
      <div
      className="section lg:hidden"
      style={{ backgroundImage: "url(/images/rooms/room2.jpeg)", backgroundRepeat: 'no-repeat' }}
    >
      <PageTitle
        title="What Client's Say?"
        subTitle="Testimonials"
        cssSubTitle=""
        cssTitle="!text-[32px]"
      />
      <div className="h-px w-[50px] bg-gray-300 my-5"></div>
      <SliderCustom autoplay>
        {reviews.map((item, index) => {
          return (
            <div key={index} className="relative">
              <FaQuoteRight className="absolute right-6 top-1/2 w-16 h-16 mt-4"/>
              <p>{item.content}</p>
              <div className="flex gap-3 items-center mt-6">
                <img className="rounded-full w-20 h-20" src={item.avatar} alt={item.name} />
                <div className="flex flex-col gap-0.5">
                  <Rating star={item.rating} />
                  <span className="uppercase mt-2">{item.name}</span>
                  <span className="text-[12px]">{item.description}</span>
                </div>
              </div>
            </div>
          );
        })}
      </SliderCustom>
    </div>
    </div>
  );
}

export default Testimonials;
