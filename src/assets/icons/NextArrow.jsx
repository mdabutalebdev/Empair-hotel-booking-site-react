import React from 'react'
import { BsChevronRight } from "react-icons/bs";

function NextArrow({onClick}) {
  return (
    <div className='group inline-block absolute right-[30px] top-[-110px]' onClick={onClick}>
        <div className='w-[50px] h-[50px] rounded-full group-hover:bg-white bg-red-600 group-hover:border-[#E81A46] border-[#E81A46] duration-500 border grid place-items-center cursor-pointer'>
        <BsChevronRight className='group-hover:text-black text-white duration-500 font-semibold'/>
        </div>
    </div>
  )
}

export default NextArrow