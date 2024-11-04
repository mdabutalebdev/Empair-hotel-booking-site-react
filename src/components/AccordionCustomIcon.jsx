import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "./Image";
import d1 from "../assets/icons/Badge-6.svg";
import d2 from "../assets/icons/Badge-5.svg";
import d3 from "../assets/icons/Badge-4.svg";
import d5 from "../assets/icons/Badge-3.svg";
import d6 from "../assets/icons/Badge-2.svg";
import d7 from "../assets/icons/Badge-1.svg";
import d4 from "../assets/icons/Badge.svg";
import Subheading from "./Subheading";
import Paragraph from "./Paragraph";
import r1 from "../assets/images/acordion1.png";
import m1 from "../assets/images/acordionMap.png";
import DayOneTab from "./layouts/DayOneTab";
import { Link } from "react-router-dom";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className="flex gap-4 font-poppins font-semibold text-base items-center">
            <Image src={d1} />
            Day 1
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Subheading
            text={`Lake Nakuru National Park`}
            className={`text-base font-semibold text-[#212529] border-b-2 pb-3 my-4`}
          />
          <Paragraph
            text={`Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.`}
            className={`text-base text-primary mb-14`}
          />
          <div className="flex gap-10">
            <Link>
              <Image src={r1} />
            </Link>
            <Link>
              <Image src={m1} />
            </Link>
          </div>
          {/* another tab feature used here so i used another components for shorting codes */}
          <DayOneTab />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <div className="flex gap-4 font-poppins font-semibold text-base items-center">
            <Image src={d2} />
            Day 2
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Subheading
            text={`Lake Nakuru National Park`}
            className={`text-base font-semibold text-[#212529] border-b-2 pb-3 my-4`}
          />
          <Paragraph
            text={`Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.`}
            className={`text-base text-primary mb-14`}
          />
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          <div className="flex gap-4 font-poppins font-semibold text-base items-center">
            <Image src={d3} />
            Day 3
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Subheading
            text={`Lake Nakuru National Park`}
            className={`text-base font-semibold text-[#212529] border-b-2 pb-3 my-4`}
          />
          <Paragraph
            text={`Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.`}
            className={`text-base text-primary mb-14`}
          />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          <div className="flex gap-4 font-poppins font-semibold text-base items-center">
            <Image src={d4} />
            Day 4
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Subheading
            text={`Lake Nakuru National Park`}
            className={`text-base font-semibold text-[#212529] border-b-2 pb-3 my-4`}
          />
          <Paragraph
            text={`Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.`}
            className={`text-base text-primary mb-14`}
          />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          <div className="flex gap-4 font-poppins font-semibold text-base items-center">
            <Image src={d5} />
            Day 5
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Subheading
            text={`Lake Nakuru National Park`}
            className={`text-base font-semibold text-[#212529] border-b-2 pb-3 my-4`}
          />
          <Paragraph
            text={`Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.`}
            className={`text-base text-primary mb-14`}
          />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)}>
          <div className="flex gap-4 font-poppins font-semibold text-base items-center">
            <Image src={d6} />
            Day 6
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Subheading
            text={`Lake Nakuru National Park`}
            className={`text-base font-semibold text-[#212529] border-b-2 pb-3 my-4`}
          />
          <Paragraph
            text={`Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.`}
            className={`text-base text-primary mb-14`}
          />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(7)}>
          <div className="flex gap-4 font-poppins font-semibold text-base items-center">
            <Image src={d7} />
            Day 7
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Subheading
            text={`Lake Nakuru National Park`}
            className={`text-base font-semibold text-[#212529] border-b-2 pb-3 my-4`}
          />
          <Paragraph
            text={`Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.`}
            className={`text-base text-primary mb-14`}
          />
        </AccordionBody>
      </Accordion>
    </>
  );
}
