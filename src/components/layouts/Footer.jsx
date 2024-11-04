import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import Container from "../Container";
import { Link } from "react-router-dom";
import Paragraph from "../Paragraph";
import Subheading from "../Subheading";
import Heading from "../Heading";
import Image from "../Image";
import earth from "../../assets/icons/officeIcon.png";
import { CgArrowLongRight } from "react-icons/cg";
import ServiceList from "../ServiceList";
import AdventureList from "../AdventureList";
import CountryList from "../CountryList";
import { FiMail } from "react-icons/fi";
import SocialLink from "../SocialLink";
import payment from '../../assets/images/Payment Logos.png'

function Footer() {
  return (
    <footer className="pt-[70px] pb-8">
      <Container>
        {/* upper part */}
        <div className="flex justify-between items-center">
          <div className="flex gap-10 items-center">
            <Link
              to=""
              className="font-poppins font-semibold text-primary text-2xl uppercase"
            >
              <CiCirclePlus className="me-4 inline-block text-4xl" /> Quick
              Links
            </Link>
            <Paragraph text="Explore More Categories" className="text-2xl" />
          </div>
          <div className="flex gap-10 items-center">
            <Subheading text="0123-456-324-54" className="text-[#212529]" />
            <Subheading text="|" className="text-[#212529]" />
            <Subheading text="hello@entrada.com" className="text-[#212529]" />
          </div>
        </div>
        <hr className="my-10" />
        {/*office location part  */}
        <div className="flex justify-between items-center">
          <div>
            <Subheading text="Get In Touch" className="text-third mb-6" />
            <Heading
              text="Adventures Calling You Guys!"
              className=" font-medium w-[388px] leading-[60px]"
            />
          </div>
          <div className="flex">
            <div>
              <Image src={earth} className="block" />
            </div>
            <div className="ms-5">
              <Subheading text="Our Offices" className="text-black" />
              <Subheading
                text="Nepal, USA, India"
                className="font-medium text-black my-4"
              />
              <Link>
                <CgArrowLongRight className="text-4xl" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-10" />
        {/* footer navigation part  */}
        <div className="grid grid-cols-2">
          {/* 1st half */}
          <div className="grid grid-cols-3">
            <ServiceList />
            <AdventureList />
            <CountryList className="ms-8" />
          </div>
          {/* 2nd half */}
          <div className="ms-auto">
            <div>
              <Subheading text="Get In Touch" className="text-black mb-6" />
              <div className="flex gap-6 items-center">
                <Heading
                  text="Lets Talk"
                  className=" font-medium leading-[60px]"
                />
                <CgArrowLongRight className="text-4xl" />
              </div>
              {/* input field */}
              <div className="flex">
                <div className="bg-white flex p-6 shadow-xl items-center">
                  <FiMail className="text-[#99A3AD] me-4 text-xl" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    className="outline-none font-poppins font-normal placeholder:font-poppins placeholder:text-[18px] placeholder:text-[#99A3AD]"
                  />
                </div>
                <button
                  className="bg-third text-white font-poppins text-2xl px-4 py-2 shadow-xl"
                  type="#"
                >
                  Send Now!
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* lower part */}
        <div className="flex justify-between items-center mt-[130px]">
          <Subheading text='Privacy Policy'/>
          <SocialLink classname='text-black'/>
        </div>
        <hr className="my-5"/>
        <div className="flex justify-between">
          <Paragraph text='2016-2021 © Emprise' className='text-base'/>
          <div><Image src={payment}/></div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
