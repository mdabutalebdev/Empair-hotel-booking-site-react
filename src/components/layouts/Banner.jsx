import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import CardIcon from "../../assets/icons/CardIcon";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import SearchBar from "../SearchBar";
import SocialLink from "../SocialLink";
const Banner = ({className}) => {
  return (
    <section className={`pt-[100px] lg:pt-[256px] pb-[198px] bg-banner bg-cover bg-no-repeat bg-center relative ${className}`}>
      <SocialLink classname='text-white absolute bottom-[50%] -right-[120px] -rotate-90'/>
      <Container>
        <div className="md:ps-[138px] pe-[78px]">
          {/* banner text */}
          <p className="text-white font-poppins font-regular text-2xl mb-14">
            <span className="me-4">&#9472;</span>The Himalyan Mountain Ranges
          </p>
          <h1 className="text-white font-poppins text-6xl lg:text-9xl font-bold  mb-[50px]">
            Nepal Country
          </h1>
          {/* Temparature  */}
          <div className="flex justify-between">
            <div>
              <p className="text-white font-poppins font-medium text-2xl mb-10">
                <span className="me-4"> -02&#176; C</span>Very Cold
              </p>
              <div className="flex gap-3">
                <BsArrowLeftCircle className="text-white text-4xl cursor-pointer my-button-prev" />
                <BsArrowRightCircle className="text-white text-4xl cursor-pointer my-button-next" />
              </div>
            </div>
            <div className="flex">
              <CardIcon />
              <div className="ms-8 w-[350px]">
                <p className="text-white font-poppins font-regular text-[20px] mb-4">
                  We Accept Payment Through <br /> All Cards & Banking
                </p>
                <Link className="font-poppins text-white font-bold text-2xl underline">
                  Book Now!
                </Link>
              </div>
            </div>
          </div>
          <SearchBar className='mt-[65px]'/>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
