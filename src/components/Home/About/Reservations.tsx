import Link from "next/link";
import React from "react";
import { TbPhoneCall } from "react-icons/tb";

function Reservations() {
  return (
    <Link
      href="tel: 0877250298"
      className="flex gap-4 items-center cursor-pointer"
    >
      <TbPhoneCall className="text-[#AA8453] w-[50px] h-[50px]" />
      <div className="flex flex-col font-light">
        <span className="text-[#666] tracking-widest 2xl:text-[20px]">
          Reservation
        </span>
        <span className="text-[#AA8453] text-[24px] 2xl:text-[30px] font-sans">
          0877250298
        </span>
      </div>
    </Link>
  );
}

export default Reservations;
