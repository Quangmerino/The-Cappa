/* eslint-disable @next/next/no-img-element */
import { news } from "@/common/data";
import SliderCustom from "@/components/Slider";
import PageTitle from "@/components/common/PageTitle";
import useWindowSize from "@/hooks/useWindowSize";
import { SizeType } from "@/types";
import React from "react";

function News() {
  const size: SizeType = useWindowSize();
  const slide = size.width !== undefined ? (size.width > 1024 ? 3 : (size.width > 767 ? 2 : 1)) : 1
  return (
    <div className="bg-[#222] section">
      <PageTitle
        title="Our News"
        cssTitle="text-[46px]"
        subTitle="Hotel Blog"
        cssSubTitle="!tracking-[6px] text-[#aa8453]"
      />
      <SliderCustom autoplay slidesToShow={slide}>
        {news.map((item, index) => {
          return (
            <div className="overflow-hidden relative group md:pr-4 lg:pr-8" key={index}>
              <div className="absolute top-4 left-6 flex flex-col items-center border p-2 z-10">
                <span className="text-sm mt-1 font-thin">DEC</span>
                <span className="text-[26px] font-extralight">{item.date}</span>
              </div>
              <div className="overflow-hidden">
                <img
                  className="transition-all duration-500 ease-linear group-hover:transition-all group-hover:duration-500 group-hover:ease-liner group-hover:scale-125"
                  src={item.image}
                  alt={item.subTitle}
                />
              </div>
              <div className="relative w-[85%] left-1/2 -translate-x-1/2 bottom-16 px-6 py-7 bg-white transition-all duration-500 ease-linear group-hover:transition-all group-hover:duration-500 group-hover:ease-linear group-hover:bottom-40">
                <span className="text-[#666] text-[13px] uppercase tracking-widest lg:text-[16px]">
                  {item.subTitle}
                </span>
                <p className="text-[20px] text-[#222] font-light font-sans lg:text-[32px]">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </SliderCustom>
    </div>
  );
}

export default News;
