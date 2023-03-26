import Link from "next/link";
import React from "react";
import { TbPhoneCall } from "react-icons/tb";

function CallUs() {
  return (
    <Link
      href="tel: 0877250298"
      className="hidden justify-center items-center flex-col-reverse h-[200px] cursor-pointer lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-10 lg:flex"
    >
      <div className="p-2 border border-solid rounded-full hover:border-[#AA8453] lg:animate-bounce xl:mt-14 2xl:mt-20 2xl:p-4">
        <TbPhoneCall className="w-[30px] h-[30px]" />
      </div>
      <div className="flex flex-col font-extralight lg:-rotate-90">
        <span className="text-white tracking-widest 2xl:text-[20px]">Reservation</span>
        <span className="text-[#AA8453] text-[24px] 2xl:text-[30px]">0877250298</span>
      </div>
    </Link>
  );
}

export default CallUs;
