import React from 'react'
import Subheading from './Subheading'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import Date from '../assets/icons/Date';
import Findicon from '../assets/icons/Findicon';
import Selector from './Selector';
import CustomSelector from './CustomSelector';

function SearchBar({className}) {
  return (
    <div className={`w-[1328px] h-[176px] px-[71px] bg-white rounded-2xl flex items-center ${className}`}>
        <div className="pe-10">
            <Subheading text='Location' className='inline-block text-black text-[28px] font-poppins font-semibold before:w-full before:bg-[#f5d223] before:h-2 before:content-normal before:absolute before:bottom-2 before:z-[-1] relative z-10'/>
            <Selector/>
        </div>
        <div className="border-x-2 ps-14 pe-10">
            <Subheading text='Activity' className='inline-block text-black text-[28px] font-poppins font-semibold before:w-full before:bg-[#f5d223] before:h-2 before:content-normal before:absolute before:bottom-2 before:z-[-1] relative z-10'/>
            {/* <form className="flex items-center gap-10">
              <select name="Activity"  className="underline py-2 bg-white font-poppins font-normal text-[18px] text-[#99A3AD]" id="Location">
                <option selected >Bungee Jump</option>
                <option value='sky diving' >Sky diving</option>
                <option value='horse riding' >Horse riding</option>
              </select>
              <MdOutlineArrowDropDownCircle className='text-3xl text-black/70 me-10'/>
            </form> */}
            <CustomSelector/>
        </div>
        <div className="ps-14 me-10">
            <h2 className='text-black inline-block text-[28px] font-poppins font-semibold relative z-10'>
              Date
              <span className='before:w-full before:bg-[#f5d223] before:h-2 before:content-normal before:absolute before:bottom-2 before:left-0 before:z-[-1]'></span>
            </h2>
            <form className="flex items-center">
              <input type="datetime" placeholder='See date' className='underline py-2 bg-white font-poppins font-normal text-[18px] text-[#99A3AD] w-64 outline-none' name="" id="" />
              <Date className='text-3xl text-black/70'/>
            </form>
        </div>
        <div className='w-full flex justify-end'>
        <Findicon />
        </div>
    </div>
  )
}

export default SearchBar