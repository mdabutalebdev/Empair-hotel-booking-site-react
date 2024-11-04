import React from "react";
import Paragraph from "../Paragraph";
import Flex from "../Flex";
import Subheading from "../Subheading";
import Label from "../Label";
import date from "../../assets/icons/Vectordate.svg";
import Plus from "../../assets/icons/Plus.svg";
import Minus from "../../assets/icons/Minus.svg";
import Counter from "../Counter";

function TourBooking() {
  return (
    <div>
      <div className="w-[378px] p-6 bg-[#FBFBFB]">
        <Paragraph
          text={`£2469`}
          className={`text-[#FA3E2C] font-medium text-sm line-through`}
        />
        <div className="flex justify-between items-center">
          <Flex className={`gap-5 items-center`}>
            <Subheading text={`£1759`} className={`font-bold text-[36px]`} />
            <Paragraph
              text={` per person`}
              className={`font-medium text-sm text-[#546179] `}
            />
          </Flex>
          <div className="bg-[#E9ECEF] text-[#28B0A6] font-poppins font-medium text-base px-4 py-3 rounded-3xl">
            20% OFF
          </div>
        </div>
        <Paragraph
          text={`*Price based on selections bellow.`}
          className={`text-sm text-[#99A3AD]`}
        />

        <div className="my-4">
          <Label text={`Dates`} className={`font-normal my-4`} />
          <div className="flex p-3 w-full justify-between border rounded-xl bg-white">
            <input
              type="datetime"
              placeholder="Select Preferred date"
              name="date"
              className="outline-none w-full placeholder:font-poppins placeholder:text-base placeholder:text-[#99A3AD] text-base text-[#99A3AD] font-poppins"
              id=""
            />
            <img src={date} alt="date" />
          </div>
        </div>

        <Counter/>

        <div className="my-4">
          <Label text={`Selections`} className={`font-normal my-4`} />
          <div className="flex p-3 w-full justify-between border rounded-xl bg-white">
            <input
              type="datetime"
              placeholder="Flight, hotel, car etc."
              name="date"
              className="outline-none w-full placeholder:font-poppins placeholder:text-base placeholder:text-[#99A3AD] text-base text-[#99A3AD] font-poppins"
              id=""
            />
            <img src={Plus} alt="Plus" />
          </div>
        </div>
        <button className="py-5 w-full border rounded-xl bg-gradient-to-r from-[#FF9D4B] to-[#FA126C] text-[18] font-poppins font-semibold text-white">
          Check Availability
        </button>
      </div>

      <div className="mt-10">
        <Paragraph
          text={`If you have  question about this tour, please feel free to ask`}
          className={`w-[378px]`}
        />
        <button className="py-5 my-7 w-full bg-white border border-[#99A3AD] rounded-3xl text-[18px] font-poppins text-[#99A3AD]">
          Ask the Tour Expert
        </button>
        <Paragraph
          text={`*All questions are replied to within 24-48 hrs`}
          className={`text-sm text-[#99A3AD]`}
        />
      </div>
    </div>
  );
}

export default TourBooking;
