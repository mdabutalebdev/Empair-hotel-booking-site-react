import React from 'react'
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

// for react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../../assets/icons/NextArrow";
import PrevArrow from "../../assets/icons/PrevArrow";
import Gallery from '../Gallery';

function Destinations() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 1500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }
  return (
    <section className='py-[70px]'>
        <Container>
        <div className="mb-[60px]">
          <Heading text="Top Destinations" className="mb-5"/>
          <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!"/>
        </div>
        <Slider {...settings}>
            <Gallery/>
            <Gallery/>
        </Slider>
        </Container>
    </section>
  )
}

export default Destinations