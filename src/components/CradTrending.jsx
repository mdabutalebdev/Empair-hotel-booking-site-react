import React from "react";
import Subheading from "./Subheading";
import Paragraph from "./Paragraph";
import Image from "./Image";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdDone } from "react-icons/md";

function CradTrending({ cardimg, discount, title, des, price }) {
  return (
    <div className="border rounded-xl shadow-xl hover:scale-105 duration-500">
      <div className="p-4 relative">
        {/* card_image */}
        <Image className="block" src={cardimg} />
        {/* batch */}
        <div className={`w-14 h-8 bg-[#FEF2DE] text-[#F5A623] rounded-lg shadow absolute top-10 right-8 flex justify-center items-center ${discount ? "block" : "hidden"}`}>
          {discount}
        </div>
      </div>
      {/* content  */}
      <div className="p-8">
        <div className="flex justify-between mb-4">
          <div>
            <Subheading text={title} className="font-semibold mb-4" />
            <Paragraph className="text-[#99A3AD] text-base" text={des} />
          </div>
          {/* addToFav */}
          <CiHeart className="inline-block text-4xl" />
        </div>
        <div className="flex justify-between">
          <div>
            <Paragraph text="from" className="text-sm mb-[10px]" />
            {/* Price */}
              <Subheading
                text={price}
                className="font-semibold text-[32px] mb-3 relative before:w-full before:bg-[#f5d223] before:h-2 before:content-normal before:absolute before:bottom-3 before:-z-10"
              />
            <Paragraph
              className="text-[#99A3AD] text-sm"
              text="*Price Varies"
            />
          </div>
          {/* rating & review */}
          <div>
            <span className="text-[#F5A623]">
              <FaStar className="inline-block" />
              <FaStar className="inline-block" />
              <FaStar className="inline-block" />
              <FaStar className="inline-block" />
              <FaStar className="inline-block" />
            </span>
            <Paragraph
              className="text-[#99A3AD] text-sm mt-3"
              text="4.7 (108)"
            />
          </div>
        </div>
        {/* footer */}
        <div className="mt-9">
          <div className="flex items-center mb-3">
            <IoMdTime className="inline-block me-3 text-2xl text-red-600" />
            <p className="font-poppins font-medium text-base text-para">
              7 Days
            </p>
          </div>
          <div className="flex items-center gap-10">
            <p className="font-poppins text-base text-para">
              <MdDone className="inline-block me-2 text-2xl text-red-600" />
              Free Cancellation
            </p>
            <p className="font-poppins text-base text-para">
              <MdDone className="inline-block me-2 text-2xl text-red-600" /> New
              On Entrada
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CradTrending;
