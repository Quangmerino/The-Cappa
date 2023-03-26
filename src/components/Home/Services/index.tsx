/* eslint-disable @next/next/no-img-element */
import { services } from "@/common/data";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import React from "react";

function Services() {
  return (
    <div className="flex flex-col section bg-white">
      {services.map((item, index) => {
        return (
          <div className="bg-[#e8e3dc] flex flex-col md:flex-row even:md:flex-row-reverse" key={index}>
            <div className="overflow-hidden md:basis-1/2">
              <img
                className="transition-all duration-500 ease-out hover:transition-all hover:duration-500 hover:ease-in hover:scale-110"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="p-8 m-auto md:p-4 md:basis-1/2">
              <PageTitle
                subTitle={item.subTitle}
                title={item.title}
                cssSubTitle="text-[#666] mt-0"
                cssTitle="text-[#222] !text-[32px] md:line-clamp-1 lg:line-clamp-none"
              />
              <p className="text-[#666] md:line-clamp-2 lg:line-clamp-none">{item.content}</p>
              <Link
                href={item.link}
                className="uppercase py-3 px-4 bg-[#ab8a62] mt-4 flex w-36"
              >
                Learn More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Services;
