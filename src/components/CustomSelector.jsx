import React, { useState } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

function CustomSelector({ className }) {
  // for dropdown list
  let activities = [
    "Bungee Jumping",
    "Sky Diving",
    "Horse Riding",
    "Under Water Diving",
    "ParaCycling",
  ];

  //   for dropdown
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div
      className={`w-72 bg-white  font-poppins font-normal text-[18px] text-[#99A3AD] ${className}`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center py-2 cursor-pointer underline"
      >
        {selected ? selected : "Bungee Jump"}
        <MdOutlineArrowDropDownCircle size={25} className="text-black" />
      </div>
      <ul
        className={`mt-2 shadow-xl rounded-xl overflow-y-auto w-72 absolute z-10 bg-white ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        {activities.map((i) => (
          <li
            className={`p-2 hover:bg-blue-500 hover:text-white cursor-pointer`}
            key={i}
            onClick={() => {
              setSelected(i);
              setOpen(false);
            }}
          >
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomSelector;
