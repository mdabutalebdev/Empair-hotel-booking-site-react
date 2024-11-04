import React from "react";
import Container from "../Container";
import Paragraph from "../Paragraph";
import Subheading from "../Subheading";
import { CiHeadphones , CiCircleQuestion} from "react-icons/ci";
import Image from "../Image";
import dots from "../../assets/icons/vdots.png"

function Contact() {
  return (
    <section className="py-[70px]">
      <Container>
        {/* heading part */}
        <div className="text-center mb-10">
          <Subheading
            text="Still have a question?"
            className="text-[40] font-bold text-primary"
          />
          <Paragraph
            className="mt-4"
            text="The Brilliant reasons Entrada should be your one-stop-shop!"
          />
        </div>
        <div className="flex gap-10 justify-center relative">
          <div className="w-[40.5%] bg-third group duration-500 hover:bg-[#1D293F] text-center py-16 rounded-xl">
            <div className="grid place-content-center w-[104px] h-[104px] rounded-full bg-white mx-auto">
            <CiHeadphones className="text-third text-5xl"/>
            </div>
            <Subheading text='For Sales' className='text-[32px] font-medium text-white my-10'/>
            <Paragraph text='The Brilliant reasons Entrada be your one-stop-shop!' className='w-[366px] mb-8 mx-auto text-[#bee7e3] group-hover:text-para duration-500'/>
            <div className="text-center text-white font-poppins font-medium text-2xl">
              sales@entrada.com <br /> <br />
              +977(985) 456-32-12
            </div>
          </div>
          <div className="w-[40.5%] bg-third group duration-500 hover:bg-[#1D293F] text-center py-16 rounded-xl">
          <div className="grid place-content-center w-[104px] h-[104px] rounded-full bg-white mx-auto">
            <CiCircleQuestion className="text-third text-5xl"/>
            </div>
            <Subheading text='Help & Support' className='text-[32px] font-medium text-white my-10'/>
            <Paragraph text='The Brilliant reasons Entrada be your one-stop-shop!' className='w-[366px] mb-8 mx-auto text-[#bee7e3] group-hover:text-para duration-500'/>
            <div className="text-center text-white font-poppins font-medium text-2xl">
              help@entrada.com <br /> <br />
              +977(985) 456-32-12
            </div>
          </div>
          <Image src={dots} className='absolute top-8 left-16 -z-10'/>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
