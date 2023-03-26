/* eslint-disable @next/next/no-img-element */
import Rating from "@/components/Rating";
import React from "react";
import Reservations from "./Reservations";
import PageTitle from "@/components/common/PageTitle";

function AboutComponent() {
  return (
    <div className="section bg-white grid grid-cols-1 md:grid-cols-2 md:gap-6 md:items-center">
      <div>
        <Rating />
        <PageTitle
          subTitle="The Cappa Luxury Hotel"
          title="Enjoy a Luxury Experience"
          cssTitle="text-black"
          cssSubTitle="text-[#666]"
        />
        <p className="text-[#666] my-4">
          Welcome to the best five-star deluxe hotel in New York. Hotel
          elementum sesue the aucan vestibulum aliquam justo in sapien rutrum
          volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu
          posuere blane.
        </p>
        <p className="text-[#666] my-4">
          Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the
          aucan ligula. Orci varius natoque penatibus et magnis dis parturient
          monte nascete ridiculus mus nellentesque habitant morbine.
        </p>
        <Reservations />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <img
          className="col-span-1 w-full mt-20"
          src="/images/rooms/room8.jpeg"
          alt="room-8"
        />
        <img
          className="col-span-1 w-full"
          src="/images/rooms/room2.jpeg"
          alt="room-2"
        />
      </div>
    </div>
  );
}

export default AboutComponent;
