import React from "react";
import Subheading from "./Subheading";
import { Link } from "react-router-dom";

function ServiceList({className}) {
  
  // information list
  let service = [
    { text: "Budget Tours", path: "" },
    { text: "Expert Insight", path: "" },
    { text: "Independent", path: "" },
    { text: "Luxury Tours", path: "" },
    { text: "Safety Tips", path: "" },
    { text: "Tips n Tricks", path: "" },
  ];
  return (
    <div className={`${className}`}>
      <Subheading text="Services" className="font-medium mb-5" />
      <ul>
        {service.map((i) => (
          <Link to={i.path}>
            <li className="font-popins text-base text-[#546179] my-2" key={i}>
              {i.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
