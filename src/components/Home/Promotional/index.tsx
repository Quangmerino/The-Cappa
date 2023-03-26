/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Rating from "@/components/Rating";
import PageTitle from "@/components/common/PageTitle";
import { AiOutlinePlayCircle } from "react-icons/ai";

function Promotional() {
  const [open, setOpen] = useState(false);
  const handleClick = (e: any) => {
    e.preventDefault();
    setOpen(true)
  };
  return (
    <div className="relative lg:px-56 lg:h-[650px] 2xl:px-72 3xl:px-[450px]">
      <img className="lg:hidden" src="/images/rooms/room1.jpeg" alt="promotional-image" />
      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center md:left-1/2 md:-translate-x-1/2">
        <Rating />
        <PageTitle
          subTitle="The Cappa Luxury Hotel"
          cssSubTitle=""
          title="Promotional Video"
          cssTitle="text-center"
        />
        <a
          href="https://www.youtube.com/watch?v=7BGNAGahig8"
          onClick={(event) => handleClick(event)}
          className="group"
        >
          <AiOutlinePlayCircle className="w-24 h-24 group-hover:text-[#e4a853]" />
        </a>
      </div>
    </div>
  );
}

export default Promotional;
