import PageTitle from "@/components/common/PageTitle";
import React from "react";
import Reservations from "../About/Reservations";
import { pricings } from "@/common/data";
import CardPricing from "./Card";
import useWindowSize from "@/hooks/useWindowSize";
import { SizeType } from "@/types";
import SliderCustom from "@/components/Slider";

function Pricing() {

  const size: SizeType = useWindowSize()
  const slide = size.width !== undefined ? (size.width > 768 ? 2 : 1) : 1
  
  return (
    <div className="section bg-[#222] grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="flex flex-col gap-4 text-[#adadad] font-light font-serif">
        <PageTitle
          subTitle="Best Prices"
          title="Extra Services"
          cssTitle="text-white"
          cssSubTitle="font-light text-[#aa8453] uppercase"
        />
        <p>
          The best prices for your relaxing vacation. The utanislen quam
          nestibulum ac quame odion elementum sceisue the aucan.
        </p>
        <p>
          Orci varius natoque penatibus et magnis disney parturient monte
          nascete ridiculus mus nellen etesque habitant morbine.
        </p>
        <Reservations />
      </div>
      <div className="lg:col-span-2">
        <SliderCustom slidesToShow={slide} slidesToScroll={2} autoplay>
          {pricings.map((pricing, index) => {
            return (
              <CardPricing
                key={index}
                image={pricing.image}
                price={pricing.price}
                time={pricing.time}
                name={pricing.name}
                benefits={pricing.benefits}
              />
            );
          })}
        </SliderCustom>
      </div>
    </div>
  );
}

export default Pricing;
