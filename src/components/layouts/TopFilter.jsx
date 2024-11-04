import React from 'react'
import Image from '../Image'
import Paragraph from '../Paragraph'
import deal from '../../assets/icons/Deals.svg'
import Cancellation from '../../assets/icons/Cancellation.svg'
import Chopper from '../../assets/icons/Chopper.svg'
import Special from '../../assets/icons/Special.svg'
import Star from '../../assets/icons/Star Plus.svg'
import Timer from '../../assets/icons/Timer.svg'


function TopFilter({className}) {
  return (
    <div className={`w-full bg-whiten grid grid-cols-6 gap-8 mb-10 ${className}`}>
        <div className="flex justify-between items-center border rounded-2xl py-[22px] px-[10px]">
            <Image src={deal}/>
            <Paragraph text="Discounted Deals" className='text-base text-black'/>
        </div>
        <div className="flex justify-between items-center border rounded-2xl py-[22px] px-[10px]">
            <Image src={Cancellation}/>
            <Paragraph text="Free Cancellation" className='text-base text-black'/>
        </div>
        <div className="flex justify-between items-center border rounded-2xl py-[22px] px-[10px]">
            <Image src={Special}/>
            <Paragraph text="Entrada Specials" className='text-base text-black'/>
        </div>
        <div className="flex justify-between items-center border rounded-2xl py-[22px] px-[10px]">
            <Image src={Timer}/>
            <Paragraph text="Few Seats Left" className='text-base text-black'/>
        </div>
        <div className="flex justify-between items-center border rounded-2xl py-[22px] px-[10px]">
            <Image src={Chopper}/>
            <Paragraph text="Private Tours" className='text-base text-black'/>
        </div>
        <div className="flex justify-between items-center border rounded-2xl py-[22px] px-[10px]">
            <Image src={Star}/>
            <Paragraph text="New on Entrada" className='text-base text-black'/>
        </div>
    </div>
  )
}

export default TopFilter