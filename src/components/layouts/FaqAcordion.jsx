import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Paragraph from "../Paragraph";
import Image from "../Image";
import icon from "../../assets/icons/faqBadge.svg";
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

function FaqAcordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  let data = [
    {
      idno: 1,
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
    {
      idno: 2,
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
    {
      idno: 3,
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
    {
      idno: 4,
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
    {
      idno: 5,
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
    {
      idno: 6,
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
    {
      idno: 7,
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
  ];
  return (
    <div>
      {data.map(({idno, title, description}) => (
        <Accordion open={open === idno} icon={<Icon id={idno} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(idno)} className="bg-[#FBFBFB] px-2 rounded-xl">
            <div className="flex gap-4 font-poppins font-semibold text-base items-center ">
              <Image src={icon} />
              {title}
            </div>
          </AccordionHeader>
          <AccordionBody className="rounded-b-lg border border-t-0 ps-3">
            <Paragraph
              text={description}
              className={`text-base text-primary pb-8 pe-16`}
            />
          </AccordionBody>
        </Accordion>
      ))}
      <Link>
        <Paragraph
          text="Show 10+ more FAQ’s"
          className={`py-4 border-b-2 text-base `}
        />
      </Link>
    </div>
  );
}

export default FaqAcordion;
