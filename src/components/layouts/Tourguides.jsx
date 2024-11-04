import React from 'react'
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import CardTour from '../CardTour';
import t1 from "../../assets/images/t1.png";
import t2 from "../../assets/images/t2.png";

// for react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../../assets/icons/NextArrow";
import PrevArrow from "../../assets/icons/PrevArrow";

function Tourguides() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
    
  return (
    <section className='py-[70px]'>
        <Container>
        <div className="mb-[60px]">
          <Heading text="Tour Guides" className="mb-5" />
          <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" />
        </div>
        <Slider {...settings}>
            <CardTour title='Martina James Junior' img={t1} serial='01'/>
            <CardTour title='Martina James Junior' img={t2} serial='02'/>
        </Slider>
        </Container>
    </section>
  )
}

export default Tourguides