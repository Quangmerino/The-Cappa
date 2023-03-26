/* eslint-disable @next/next/no-img-element */
import { faciltiesType } from '@/types'
import React from 'react'

function CardFacilties({icon, title, description}:faciltiesType) {
  return (
    <div className='border border-solid py-8 px-5'>
        {icon}
        <div className='my-4'>
            <span className='text-[#222] text-[24px] font-serif'>{title}</span>
            <p className='text-[#666] mt-4'>{description}</p>
        </div>
    </div>
  )
}

export default CardFacilties