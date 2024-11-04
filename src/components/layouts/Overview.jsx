import React from "react";
import Heading from "../Heading";
import { IoShareOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Image from "../Image";
import star from "../../assets/icons/Stars(4).png";
import Paragraph from "../Paragraph";
import { Link } from "react-router-dom";
import TabsOverview from "./TabsOverview";

function Overview() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full">
        <Heading text="Sandy beach holiday in Lagos" className="text-[36px]" />
        <div className="icons flex gap-8">
          <Link>
            <IoShareOutline className="text-3xl text-[#546179]" />
          </Link>
          <Link>
            <CiHeart className="text-4xl text-[#546179]" />
          </Link>
        </div>
      </div>
      <div className="flex gap-4">
        <Image src={star} />
        <Paragraph text="6,788 Reviews" />
      </div>
      <hr className="my-5" />
      <TabsOverview/>
    </div>
  );
}

export default Overview;
