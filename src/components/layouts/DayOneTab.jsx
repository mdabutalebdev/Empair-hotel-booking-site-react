import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Paragraph from "../Paragraph";
import Subheading from "../Subheading";
import Image from "../Image";
import Shared from "../../assets/images/Room-1.png"
import Double from "../../assets/images/Room-2.png"
import Single from "../../assets/images/Room-3.png"

function DayOneTab({className}) {
    const [activeTab, setActiveTab] = React.useState("acommodataion");

  const data = [
    {
      label: "Acommodataion",
      value: "acommodataion",
    },
    {
      label: "Meals",
      value: "meals",
    },
    {
      label: "Inclusions",
      value: "inclusions",
    },
    {
      label: "Special Info",
      value: "special info",
    },
  ];
  return (
    <div>
      <Tabs className={`max-w-[40rem] mt-4 ${className}`} value={activeTab}>
        <TabsHeader
          className="bg-transparent border-b-2"
          indicatorProps={{
            className: "shadow-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              activeTab === value
                ? "font-poppins font-medium text-base text-[#99A3AD] "
                : "font-poppins font-medium text-base text-primary"
            } >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
            <TabPanel value={`acommodataion`}>
              <Paragraph text={`Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.`} className={`text-base text-primary mb-4`} />
              <div className="flex gap-10">
                <div className="flex flex-col gap-4">
                    <Paragraph text={`Shared Room`} className="text-base text-[#28B0A6]"/>                    
                    <Paragraph text={`Double Room`} className="text-base text-[#28B0A6]"/>                    
                    <Paragraph text={`Single Room`} className="text-base text-[#28B0A6]"/>                    
                </div>
                <div className="flex flex-col gap-4">
                    <Paragraph className={`text-base text-primary`} text={`Included in package`}/>
                    <Paragraph className={`text-base text-primary`} text={`£45 per person extra`}/>
                    <Paragraph className={`text-base text-primary`} text={`£80 per person extra`}/>
                </div>
              </div>
              <div className="flex gap-8 mt-4">
                <div>
                    <Subheading text={`Shared`} className={`text-[#99A3AD] text-base mb-4`}/>
                    <Image src={Shared} className={`cursor-pointer`}/>
                </div>
                <div>
                    <Subheading text={`Double`} className={`text-[#99A3AD] text-base mb-4`}/>
                    <Image src={Double} className={`cursor-pointer`}/>
                </div>
                <div>
                    <Subheading text={`Single`} className={`text-[#99A3AD] text-base mb-4`}/>
                    <Image src={Single} className={`cursor-pointer`}/>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={`meals`}>
            <Paragraph text={`Know more about meal in Inclusions. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.`} className={`text-base text-primary mb-4`} />
            </TabPanel>
            <TabPanel value={`inclusions`}>
            <Paragraph text={`Know more about meal in Inclusions. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do ex minim velit sunt do ex minim velit sunt do ex minim velit sunt do.`} className={`text-base text-primary mb-4`} />
            </TabPanel>
            <TabPanel value={`special info`}>
            <Paragraph text={`Know more about meal in Inclusions. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do ex minim velit sunt do.`} className={`text-base text-primary mb-4`} />
            </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default DayOneTab;
