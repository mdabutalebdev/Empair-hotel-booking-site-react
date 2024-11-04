import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import CardHover from "../CardHover";
import b1 from "../../assets/images/b1.png";
import b2 from "../../assets/images/b2.png";
import b3 from "../../assets/images/b3.png";
import Button from "../Button";

function BestSeller({title}) {
  return (
    <section className="py-[70px]">
      <Container>
        <div className="mb-[60px] flex justify-between">
          <div>
            <Heading text={title} className="mb-5" />
            <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" />
          </div>
          <div className="grid place-content-center">
            <button className='text-white bg-third font-poppins font-normal rounded-full px-[40px] py-[20px] text-[24px]'>Check All</button>
          </div>
        </div>
        <div className="flex gap-10">
          <CardHover
            img={b1}
            discount="30%"
            duration="10 Days | 09 Night"
            price="$895.50"
            title="Train Tour Skyline"
            des="Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking"
          />
          <CardHover
            img={b2}
            discount="30%"
            duration="10 Days | 09 Night"
            price="$895.50"
            title="Sea Nature Views"
            des="Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking"
          />
          <CardHover
            img={b3}
            discount="30%"
            duration="10 Days | 09 Night"
            price="$895.50"
            title="Trilogy Market Ptr"
            des="Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking"
          />
        </div>
      </Container>
    </section>
  );
}

export default BestSeller;
