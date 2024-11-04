import React from 'react'
import Subheading from "./Subheading";
import { Link } from "react-router-dom";

function AdventureList({className}) {
    
    // information list
    let adventure = [
    { text: "Beach Activity", path: "" },
    { text: "Bungee Jump", path: "" },
    { text: "City Tour", path: "" },
    { text: "Hiking Trips", path: "" },
    { text: "Jungle Safari", path: "" },
    { text: "Night City Walk", path: "" },
  ];

  return (
    <div className={`${className}`}>
      <Subheading text="Adventures" className="font-medium mb-5" />
      <ul>
        {adventure.map((i) => (
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

export default AdventureList