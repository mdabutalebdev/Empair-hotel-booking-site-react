import React from "react";
import Image from "./Image";
import d1 from "../assets/images/vietnam.png";
import d2 from "../assets/images/oldrain.png";
import d3 from "../assets/images/greece.png";
import d4 from "../assets/images/london.png";
import d5 from "../assets/images/amsterdem.png";
import d6 from "../assets/images/paris.png";

function Gallery() {
  return (
    <div>
      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-8">
          <div className="relative">
            <Image src={d1} />
            <h4 className="absolute text-white bottom-14 left-10 font-poppins font-medium text-2xl">
              Vietnam
            </h4>
            <p className="absolute text-white bottom-8 left-10 font-poppins font-normal text-base">
              Waterfall
            </p>
            <div className="w-14 h-8 bg-[#FEF2DE] text-[#F5A623] rounded-lg shadow absolute top-10 left-8 flex justify-center items-center">
              30%
            </div>
          </div>
          <div className="relative">
            <Image src={d2} />
            <h4 className="absolute text-white bottom-14 left-10 font-poppins font-medium text-2xl">
              Old Rain
            </h4>
            <p className="absolute text-white bottom-8 left-10 font-poppins font-normal text-base">
              Waterfall
            </p>
            <div className="w-14 h-8 bg-[#FEF2DE] text-[#F5A623] rounded-lg shadow absolute top-10 left-8 flex justify-center items-center">
              30%
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={d3} />
          <h4 className="absolute text-white bottom-14 left-10 font-poppins font-medium text-2xl">
            Greece
          </h4>
          <p className="absolute text-white bottom-8 left-10 font-poppins font-normal text-base">
            Waterfall
          </p>
          <div className="w-14 h-8 bg-[#FEF2DE] text-[#F5A623] rounded-lg shadow absolute top-10 left-8 flex justify-center items-center">
            30%
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="relative">
            <Image src={d4} />
            <h4 className="absolute text-white bottom-14 left-10 font-poppins font-medium text-2xl">
              London
            </h4>
            <p className="absolute text-white bottom-8 left-10 font-poppins font-normal text-base">
              Waterfall
            </p>
            <div className="w-14 h-8 bg-[#FEF2DE] text-[#F5A623] rounded-lg shadow absolute top-10 left-8 flex justify-center items-center">
              30%
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="relative">
              <Image src={d5} />
              <h4 className="absolute text-white bottom-14 left-10 font-poppins font-medium text-2xl">
                Amsterdam
              </h4>
              <p className="absolute text-white bottom-8 left-10 font-poppins font-normal text-base">
                Waterfall
              </p>
              <div className="w-14 h-8 bg-[#FEF2DE] text-[#F5A623] rounded-lg shadow absolute top-10 left-8 flex justify-center items-center">
                30%
              </div>
            </div>
            <div className="relative">
              <Image src={d6} />
              <h4 className="absolute text-white bottom-14 left-10 font-poppins font-medium text-2xl">
                Paris
              </h4>
              <p className="absolute text-white bottom-8 left-10 font-poppins font-normal text-base">
                Waterfall
              </p>
              <div className="w-14 h-8 bg-[#FEF2DE] text-[#F5A623] rounded-lg shadow absolute top-10 left-8 flex justify-center items-center">
                30%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
