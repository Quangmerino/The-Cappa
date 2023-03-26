import { cardFacilties } from '@/common/data';
import PageTitle from '@/components/common/PageTitle';
import React from 'react'
import CardFacilties from './Card';

function Facilties() {
  return (
    <div className='bg-white section'>
        <PageTitle subTitle='Our Services' cssSubTitle='text-[#666]' title='Hotel Facilities' cssTitle='text-black'/>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {
                cardFacilties.map((item, index) => {
                    return <CardFacilties key={index} icon={item.icon} title={item.title} description={item.description}/>
                })
            }
        </div>
    </div>
  )
}

export default Facilties;