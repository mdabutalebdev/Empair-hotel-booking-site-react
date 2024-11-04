import React from "react";
import Image from "./Image";
import Subheading from "./Subheading";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { Link } from "react-router-dom";

function CardTour({img,serial,title}) {
  return (
    <div>
      <div className="flex">
        {/* image part */}
        <div className="relative">
          <Image src={img} />
          <div className="w-[72px] h-[72px] grid place-content-center rounded-tr-2xl font-poppins text-2xl absolute bottom-0 left-0 bg-white ">
            {serial}
          </div>
        </div>
        {/* text part */}
        <div className="all_content">
          <div className="pb-[63px] pt-[38px] ps-[38px] ">
            <Subheading text="Adventure Guru" className="text-third  mb-8" />
            <div className="w-[275px] mb-[110px]">
              <Heading text={title} className=" font-medium " />
            </div>
            <div className="flex">
              <div>
                <Subheading text="About" className="mb-4" />
                <Paragraph
                  text="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."
                  className="w-[380px]"
                />
              </div>
              <div className="ms-[38px]">
                <Subheading text="Journey" className="mb-4" />
                <Paragraph
                  text="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."
                  className="w-[380px]"
                />
              </div>
            </div>
            <div className="flex gap-10 mt-[130px]">
              <Link ><Subheading text='Facebook' className='text-[18px] text-black'/></Link>
              <Link ><Subheading text='Instagram' className='text-[18px] text-black'/></Link>
              <Link ><Subheading text='Twitter' className='text-[18px] text-black'/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTour;
