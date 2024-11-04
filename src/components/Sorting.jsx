import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function Sorting() {
  let sort = ["Lowest To High", "Highest To Low","Most popular"];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div className="w-40 font-poppins font-semibold text-[18px] text-[#212529] bg-white">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {selected ? selected : "Most popular"}
        <IoIosArrowDown className={`${open ? "rotate-180" : "rotate-0"}`} />
      </div>
      <ul
        className={`mt-2 shadow-2xl absolute bg-white 
        ${open ? "block" : "hidden"}`}
      >
        {sort.map((item) => (
          <li
            onClick={() => {
              setOpen(false);
              setSelected(item);
            }}
            className="p-1 hover:bg-blue-600 hover:text-white duration-700 cursor-pointer"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sorting;
