import React from 'react'
import { BsChevronLeft } from "react-icons/bs";

function PrevArrow({ onClick }) {
  return (
    <div className='group inline-block absolute right-[100px] top-[-110px]' onClick={onClick}>
        <div className='w-[50px] h-[50px] rounded-full group-hover:bg-[#E81A46] border-[#E81A46] group-hover:border-[#E81A46] duration-500 bg-white border grid place-items-center cursor-pointer'>
        <BsChevronLeft className='group-hover:text-white duration-500 font-semibold'/>
        </div>
    </div>

  )
}

export default PrevArrow