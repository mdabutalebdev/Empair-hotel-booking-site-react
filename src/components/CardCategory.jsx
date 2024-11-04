import React from "react";
import Subheading from "./Subheading";
import Paragraph from "./Paragraph";
function CardCategory({icon,title,des,rating}) {
  return (
    <div className="p-8 border rounded-xl shadow-xl relative">
      {/* batch */}
      <div className="w-14 h-8 bg-[#FEF2DE] text-[#F5A623] rounded-lg shadow absolute right-8 flex justify-center items-center">
        {rating}
      </div>
      <img src={icon} className="mt-[48px]" alt={icon} />
      <Subheading text={title} className="font-medium my-5" />
      <Paragraph className="text-[#99A3AD] text-base" text={des}/>
    </div>
  );
}

export default CardCategory;
