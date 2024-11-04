import React from 'react'
import Subheading from "./Subheading";
import { Link } from "react-router-dom";

function CountryList({className}) {

    // information list
    let country = [
        { text: "USA", path: "" },
        { text: "Australia", path: "" },
        { text: "South Africa", path: "" },
        { text: "West Indies", path: "" },
        { text: "New Zealand", path: "" },
        { text: "Srilanka", path: "" },
      ];
  return (
    <div className={`${className}`}>
    <Subheading text="Country" className="font-medium mb-5" />
    <ul>
      {country.map((i) => (
        <Link to={i.path}>
          <li className="font-popins text-base text-[#546179] my-2" key={i}>
            {i.text}
          </li>
        </Link>
      ))}
    </ul>
  </div>
  )
}

export default CountryList