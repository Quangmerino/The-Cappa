/* eslint-disable @next/next/no-img-element */
import { roomType } from "@/types";
import React from "react";

function CardRoom({ image, price, time, name }: roomType) {
//   let colSpan = span % 3 === 1 ? 12 : span % 3 === 2 ? 6 : span % 3;
  
  return (
    <div
      className={`relative w-full overflow-hidden group`}
    >
      <span className="-rotate-90 py-1 px-3 border border-solid absolute top-8 right-2 lg:top-10 lg:right-4 z-10">
        Book
      </span>
      <img
        className="transition-all duration-300 ease-out group-hover:scale-x-110 group-hover:scale-y-110 group-hover:transition-all group-hover:duration-300 group-hover:ease-in"
        src={image}
        alt={name}
      />
      <div className="absolute w-full flex flex-col gap-4 left-5 bottom-5 transition-all duration-300 ease-out group-hover:transition-all group-hover:duration-300 group-hover:ease-in group-hover:bottom-24">
        <span className="font-light">
          {price}$ / {time}
        </span>
        <span className="font-serif">{name}</span>
        <div className="w-[80px] bg-white h-px group-hover:w-[90%] transition-all duration-500 ease-out group-hover:transition-all group-hover:duration-500 group-hover:ease-out"></div>
      </div>
    </div>
  );
}

export default CardRoom;
