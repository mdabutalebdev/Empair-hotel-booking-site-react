import React from "react";
import r1 from "../../assets/images/Reviewer.png";
import r2 from "../../assets/images/Reviewer1.png";
import r3 from "../../assets/images/Reviewer2.png";
import star1 from "../../assets/icons/5 Star.png";
import star2 from "../../assets/icons/4 Star.png";
import star3 from "../../assets/icons/5 Star.png";
import Image from "../Image";
import Subheading from "../Subheading";
import Paragraph from "../Paragraph";
import { Link } from "react-router-dom";
function Review() {
  let data = [
    {
      avatar: r1,
      name: "Brooklyn Simmons",
      review: star1,
      comment: "“Exceptional”",
      desc: "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
      date: "Reviewed 23rd, November",
    },
    {
      avatar: r2,
      name: "Wade Warren",
      review: star2,
      comment: "“Terrific”",
      desc: "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
      date: "Reviewed 23rd, November",
    },
    {
      avatar: r3,
      name: "Leslie Alexander",
      review: star3,
      comment: "“Awesome”",
      desc: "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
      date: "Reviewed 23rd, November",
    },
  ];
  return (
    <div>
      {data.map(({ avatar, comment, date, desc, name, review }) => (
        <div className="w-[648px] rounded-3xl border border-b-0">
          {/* Avatar $ Review */}
          <div className="flex items-center py-3 px-2 justify-between bg-[#FBFBFB] border-b-2">
            <div className="flex gap-5 items-center">
              <Image src={avatar} />
              <Subheading
                text={name}
                className={`text-[#546179] text-[18px]`}
              />
            </div>
            <div>
              <Image src={review} />
            </div>
          </div>
          {/* comment & date */}
          <div className="flex px-2 justify-between items-center pt-10 border-b-2 pb-2">
            <Subheading
              text={comment}
              className={`text-[18px] font-semibold text-primary`}
            />
            <Paragraph text={date} className={`text-base text-[#546179]`} />
          </div>
          <div className="pt-4 pb-10 border-b-2 ps-2">
            <Paragraph text={desc} className={`text-base text-primary pe-20`} />
          </div>
        </div>
      ))}
      <Link>
        <Paragraph
          text="Show 10+ more reviews"
          className={`py-4 border-b-2 text-base `}
        />
      </Link>
    </div>
  );
}

export default Review;
