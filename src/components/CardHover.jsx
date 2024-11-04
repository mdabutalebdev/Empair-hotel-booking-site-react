import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "./Image";
import Button from "./Button";
import { IoMdShare } from "react-icons/io";

function CardHover({img,discount,duration,price,title,des}) {
  return (
    <div>
      <div className="relative overflow-hidden group">
        <Image src={img} />
        <div className="bg-transparent px-10 absolute w-full top-[-320px] right-1/2 group-hover:top-0 left-0 duration-700 h-full">
          <div className="flex justify-end mt-5">
            <div className="w-14 h-10 rounded-2xl bg-[#FEF2DE] grid place-content-center mb-[175px] text-[#F5A623] font-poppins font-medium text-[18px]">
              {discount}
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <Paragraph
                className="text-white text-[18px] mb-2"
                text={duration}
              />
              <h3
                className="relative inline-block text-white font-poppins font-semibold text-[32px]"
              >
                {price} <span className="after:content-normal after:w-full after:h-1 after:bg-white after:absolute after:bottom-0 after:left-0"></span>
              </h3>
            </div>
            <div className="flex gap-4 items-center">
              <span className="w-10 h-10 rounded-full grid place-content-center bg-white cursor-pointer">
                <IoMdShare />
              </span>
              <button className="text-white bg-third font-poppins font-normal text-[18px] py-2 px-6 rounded-full">Explore</button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-9">
        <Heading text={title} className='font-medium text-[24px] pb-4'/>
        <Paragraph text={des} className='text-base text-[#99A3AD]'/>
      </div>
    </div>
  );
}

export default CardHover;
