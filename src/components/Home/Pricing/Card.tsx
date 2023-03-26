/* eslint-disable @next/next/no-img-element */
import { cardPricingType } from '@/types'
import React from 'react'
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

function CardPricing({image, name, time, price, benefits}:cardPricingType) {
  return (
    <div className='lg:odd:mr-6'>
        <img src={image} alt={name}/>
        <div className='p-6 bg-white'>
            <span className='text-[24px] font-serif text-[#666]'>{name}</span>
            <div>
                <span className='text-[40px] text-[#aa8453] font-thin'>${price}</span>
                <span className='text-[#666]'>/ {time}</span>
            </div>
            <div>
                {
                    benefits.map((benefit, index) => {
                        return(
                            <div key={index} className='flex items-center gap-3'>
                                <span>{benefit.status === true ? <AiOutlineCheck className='text-[#aa8453]'/> : <AiOutlineClose className='text-black'/>}</span>
                                <span className='text-[#222]'>{benefit.text}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CardPricing