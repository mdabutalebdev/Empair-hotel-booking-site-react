import React from "react";
import Description from "../../assets/icons/descript.svg";
import iternary from "../../assets/icons/inclusions.svg";
import inclusions from "../../assets/icons/iternary.svg";
import review from "../../assets/icons/review.svg";
import faq from "../../assets/icons/faq.svg";
import p1 from "../../assets/icons/watch.svg";
import p2 from "../../assets/icons/walking.svg";
import p3 from "../../assets/icons/meter.svg";
import p4 from "../../assets/icons/group.svg";
import p5 from "../../assets/icons/age.svg";
import p6 from "../../assets/icons/season.svg";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { useState } from "react";
import Paragraph from "../Paragraph";
import { Link } from "react-router-dom";
import Image from "../Image";
import Subheading from "../Subheading";
import { AccordionCustomIcon } from "../AccordionCustomIcon";
import InclusionsList from "./InclusionsList";
import Review from "./Review";
import FaqAcordion from "./FaqAcordion";

function TabsOverview() {
  const [activeTab, setActiveTab] = useState("overview");
  // tabs data
  const data = [
    {
      label: "Overview",
      value: "overview",
      desc: `Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat sit dolor adipisicing excepteur eiusmod. Mollit reprehenderit magna tempor ex.`,
    },
    {
      label: "Iternary",
      value: "iternary",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Inclusions",
      value: "inclusions",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Reviews",
      value: "reviews",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "FAQ",
      value: "faq",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Essential",
      value: "essential",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  // overview info
  const info = [
    {
      title: "Duration",
      logo: p1,
      besideLogo: "2 Days",
    },
    {
      title: "Activity",
      logo: p2,
      besideLogo: "Walking",
    },
    {
      title: "Physical",
      logo:p3,
      besideLogo: "Strenuous",
    },
    {
      title: "Group Size",
      logo: p4,
      besideLogo: "8",
    },
    {
      title: "Age",
      logo: p5,
      besideLogo: "7+",
    },
    {
      title: "Season",
      logo: p6,
      besideLogo: "Apr-Sep",
    },
  ];
  return (
    <div>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-[#28B0A6] shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? "font-poppins text-[18px] text-primary"
                  : "font-poppins text-[18px] text-[#28B0A6]"
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <TabPanel key="overview" value="overview">
            <div className="flex gap-16">
              <Image src={Description} className={`self-start`} />
              <div>
                <Paragraph
                  className="text-[#1D293F] mb-5 text-base"
                  text={data.at(0).desc}
                />
                <Link className="text-[#99A3AD] font-poppins text-base">
                  Show More...
                </Link>
                <div className="flex flex-wrap gap-y-7 mt-14 border-b-2 pb-4">
                  {info.map(({ title, logo, besideLogo }) => (
                    <div key={title} className="basis-1/3">
                      <Subheading
                        text={title}
                        className="text-base text-[#546179]"
                      />
                      <div className="flex items-center gap-2 mt-7">
                        <Image src={logo} />
                        <Subheading
                          text={besideLogo}
                          className="text-[#1D293F] font-medium"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel key="iternary" value="iternary">
            <div className="flex gap-16">
              <Image src={iternary} className={`self-start`} />
              <div>
                <AccordionCustomIcon />
                <Link>
                  <Paragraph
                    text="Show 12 more itinerary days"
                    className={`py-4 border-b-2 text-base `}
                  />
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel key="inclusions" value="inclusions">
            <div className="flex gap-16">
              <Image src={inclusions} className={`self-start`} />
              <div className="border-b-2 pb-2">
                <Paragraph
                  className="text-[#1D293F] mb-5 text-base"
                  text={data.at(0).desc}
                />
                <Link className="text-[#99A3AD] font-poppins text-base">
                  Show More...
                </Link>
                {/* list of inclusions */}
                <InclusionsList/>
              </div>
            </div>
          </TabPanel>
          <TabPanel key="reviews" value="reviews">
            <div className="flex gap-11">
              <Image src={review} className={`self-start`} />
              <div>
                <Review/>
              </div>
            </div>
          </TabPanel>
          <TabPanel key="faq" value="faq">
          <div className="flex gap-16">
              <Image src={faq} className={`self-start`} />
              <div>
                <FaqAcordion/>
              </div>
            </div>
          </TabPanel>
          <TabPanel key="essential" value="essential">
          <div className="flex gap-16">
              <Image src={iternary} className={`self-start`} />
              <div>
              <Paragraph
                  className="text-[#1D293F] mb-5 text-base"
                  text={data.at(0).desc}
                />
              </div>
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default TabsOverview;
