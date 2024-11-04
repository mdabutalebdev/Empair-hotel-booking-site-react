import React from "react";
import Container from "../Container";
import Image from "../Image";
import nl1 from "../../assets/images/nl1.png";
import nl2 from "../../assets/images/nl2.png";
import nl3 from "../../assets/images/nl3.png";
import Dots from "../../assets/icons/hdots.png";
import featured from "../../assets/images/featured.png";
import Subheading from "../Subheading";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { FiMail } from "react-icons/fi";

function Newsletter() {
  return (
    <section className="py-[70px]">
      <Container className="flex relative gap-10">
        {/* image section */}
        <div className="grid grid-cols-2 gap-10">
          <Image src={nl1} />
          <div className="grid grid-rows-2 gap-10">
            <Image src={nl2} />
            <Image src={nl3} />
          </div>
        </div>
        <Image className="absolute -top-4 -left-12 -z-10" src={Dots} />
        {/* text sction */}
        <div className="all_content">
          <div className="pb-[63px] pt-[38px]">
            <Subheading
              text="Subscribe For Others"
              className="text-third mb-8"
            />
            <div className="w-[400px] mb-[30px]">
              <Heading
                text="Adventures Calling You Guys!"
                className=" font-medium "
              />
            </div>
            <Paragraph
              text="The Brilliant reasons Entrada should be
                  your one-stop-shop!"
              className="w-[380px] mb-16"
            />
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
                className="bg-third text-white font-poppins text-2xl px-4 py-2"
                type="#"
              >
                Send Now!
              </button>
            </div>
            <Paragraph
              text="Expect a reply in 2-3 working days."
              className="w-[380px] text-black mt-8 text-base"
            />
          </div>
        </div>
        
      </Container>
            <Image src={featured} className='text-center mx-auto mt-16'/>
        
    </section>
  );
}

export default Newsletter;
