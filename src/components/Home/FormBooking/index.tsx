import Rating from "@/components/Rating";
import Link from "next/link";
import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { TfiCheck } from "react-icons/tfi";
import Clients from "../Clients";
import BookingForm from "./Form";


function FormBooking() {
  
  return (
    <>
      <div
        className="section flex flex-col gap-6 lg:h-[800px]"
        style={{ backgroundImage: "url(/sliders/slider2.jpeg)" }}
      >
        <Rating />
        <p className="text-[24px] font-serif font-thin lg:text-[36px] lg:mr-[50%]">
          Each of our guest rooms feature a private bath, wi-fi, cable
          television and include full breakfast.
        </p>
        <Link
          href="tel: 0877250298"
          className="flex gap-4 items-center cursor-pointer"
        >
          <TbPhoneCall className="w-[50px] h-[50px]" />
          <div className="flex flex-col font-light">
            <span className="tracking-widest 2xl:text-[20px]">Reservation</span>
            <span className="text-[24px] 2xl:text-[30px] font-sans">
              0877250298
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-1 mb-10">
          <TfiCheck />
          <span>Call us, it&#39;s toll-free.</span>
        </div>
        <BookingForm/>
      </div>
      <div className="hidden lg:flex lg:h-[200px] lg:items-center">
        <Clients />
      </div>
    </>
  );
}

export default FormBooking;
