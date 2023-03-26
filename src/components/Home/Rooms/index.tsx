import PageTitle from "@/components/common/PageTitle";
import React from "react";
import CardRoom from "../Card";
import { rooms } from "@/common/data";

function Rooms() {
  return (
    <div id="#room" className="bg-[#f8f5f0] section">
      <PageTitle
        subTitle="The Cappa Luxury Hotel"
        cssSubTitle="text-[#666]"
        title="Rooms & Suites"
        cssTitle="text-black"
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {rooms.map((room, index) => {
          return (
            <CardRoom
              key={index}
              image={room.image}
              price={room.price}
              time={room.time}
              name={room.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Rooms;
