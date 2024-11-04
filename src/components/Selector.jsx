import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

function Selector({className}) {
  // for api data
  const [countries, setCountries] = useState([]);
  //   for dropdown
  const [open, setOpen] = useState(false);
  //   for selected option
  const [selected, setSelected] = useState("");
  //  for taking search value
  const [inputValue, setInputValue] = useState("");

  //    for fetching api
  useEffect(() => {
    async function call() {
      let data = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name"
      );
      setCountries(data.data);
    }
    call();
  }, []);

  return (
    <div className={`w-72 bg-white  font-poppins font-normal text-[18px] text-[#99A3AD] ${className}`}>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full rounded underline"
      >
        {selected
          ? selected.length > 25
            ? selected.substring(0, 25) + "..."
            : selected
          : "Enter your destination"}
        <CiLocationOn size={25} className="text-black" />
      </div>
      <ul
        className={`mt-2 bg-white overflow-y-auto shadow-xl rounded-xl absolute w-72 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        {/* for searching */}
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>

        {countries.map((country) => (
          <li
            onClick={() => {
              if (
                country.name.common.toLowerCase() !== selected.toLowerCase()
              ) {
                setSelected(country.name.common);
                setOpen(false);
                setInputValue("");
              }
            }}
            key={country.name.common}
            className={`p-2 hover:bg-blue-600 hover:text-white cursor-pointer 

            // for matching color
            ${country.name.common.toLowerCase() === selected.toLowerCase() &&
            "bg-sky-600 text-white"}

            // for live search
            ${country.name.common.toLowerCase().startsWith(inputValue)
            ? "block"
            : "hidden"}`}
          >
            {country.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Selector;
