/* eslint-disable @next/next/no-img-element */
import { sliders } from '@/common/data';
import Rating from '@/components/Rating';
import PageTitle from '@/components/common/PageTitle';
import Link from 'next/link';
import React from 'react'
import CheckIn from '../CheckIn';
import CallUs from '../CallUs';
import SliderCustom from '@/components/Slider';

function SliderHomePage() {
  return (
    <div className="relative">
        <div className="absolute z-10 flex flex-col items-center uppercase left-0 right-0 gap-6 font-serif top-1/2 -translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
          <Rating />
          <PageTitle
            subTitle="Unique Place to Relax & Enjoy"
            title="The Perfect Base For You"
            cssTitle="text-center px-6"
          />
          <Link href='#' className="btn bg-transparent rounded-none border-white text-white px-6">
            Rooms & Suites
          </Link>
        </div>
        <div className="relative">
          <SliderCustom autoplay>
            {sliders.map((item) => {
              return (
                <img
                  className="object-cover h-[100vh] w-[100vw]"
                  key={item.id}
                  src={item.src}
                  alt="slider-image"
                />
              );
            })}
          </SliderCustom>
          <div className="hidden md:flex md:absolute md:bottom-14 md:z-10 w-full justify-center">
            <CheckIn buttonName="Check Now" />
          </div>
          <CallUs />
        </div>
      </div>
  )
}

export default SliderHomePage