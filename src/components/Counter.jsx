import React from "react";
import Label from "./Label";
import Plus from "../assets/icons/Plus.svg";
import Minus from "../assets/icons/Minus.svg";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slices/counterSlice";

function Counter() {
    // for catching the vlue with the help of redux
  let count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="my-4">
        <Label text={`Travelers`} className={`font-normal my-4`} />
        <div className="flex p-3 w-full justify-between border rounded-xl bg-white">
          <input
            type="text"
            placeholder="2 Adult, 1 Child"
            name="travellers"
            className="outline-none w-full placeholder:font-poppins placeholder:text-base placeholder:text-[#99A3AD] text-base text-[#99A3AD] font-poppins"
            id=""
          />
          <div className="flex gap-2">
            <img
              src={Minus}
              alt="minus"
              className="cursor-pointer"
              onClick={() => dispatch(decrement())}
            />
            <h2 className="text-black font-poppins font-semibold text-[18px]">
              {count}
            </h2>
            <img
              src={Plus}
              alt="plus"
              className="cursor-pointer"
              onClick={() => dispatch(increment())}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
