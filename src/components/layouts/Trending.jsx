import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import CradTrending from "../CradTrending";
import mountain from "../../assets/images/Photo1.png";
import train from "../../assets/images/Photo2.png";
import forest from "../../assets/images/Photo3.png";
import culture from "../../assets/images/Photo4.png";

// for react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../../assets/icons/NextArrow";
import PrevArrow from "../../assets/icons/PrevArrow";

function Trending() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-[70px]">
      <Container>
        <div className="mb-[60px]">
          <Heading text="Trending 2021" className="mb-5" />
          <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" />
        </div>
        <Slider {...settings}>
          <CradTrending
            cardimg={mountain}
            discount="30%"
            des="Hiking Tour | Stroke on Train"
            price="$895.00"
            title="Mountain Hiking Tour"
          />
          <CradTrending
            cardimg={train}
            discount="30%"
            des="Hiking Tour | Stroke on Train"
            price="$895.00"
            title="Train Tour Skyline"
          />
          <CradTrending
            cardimg={forest}
            discount="30%"
            des="Hiking Tour | Stroke on Train"
            price="$895.00"
            title="Forest Wild Life"
          />
          <CradTrending
            cardimg={culture}
            discount="30%"
            des="Hiking Tour | Stroke on Train"
            price="$895.00"
            title="Cultural highlights round trip"
          />
        </Slider>
      </Container>
    </section>
  );
}

export default Trending;
