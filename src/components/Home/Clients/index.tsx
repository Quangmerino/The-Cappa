/* eslint-disable @next/next/no-img-element */
import { clients } from '@/common/data'
import SliderCustom from '@/components/Slider'
import Link from 'next/link'
import React from 'react'

function Clients() {
  return (
    <div className='bg-white p-4 w-full items-center lg:pr-[600px]'>
        <SliderCustom autoplay slidesToShow={3}>
        {
            clients.map((item, index) => {
                return(
                    <Link key={index} href={item.link}>
                        <img src={item.logo} alt='logo-clients'/>
                    </Link>
                )
            })
        }
    </SliderCustom>
    </div>
  )
}

export default Clients