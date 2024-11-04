import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import beach from "../../assets/icons/Beach.png";
import Jumping from "../../assets/icons/Bungee Jumping.png";
import Backpack from "../../assets/icons/Backpack.png";
import City from "../../assets/icons/City.png";
import Jungle from "../../assets/icons/Jungle.png";
import CardCategory from "../CardCategory";

// for react slick 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../../assets/icons/NextArrow";
import PrevArrow from "../../assets/icons/PrevArrow";






function Category() {
  // for slider

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    centerMode: true,
    centerPadding: '100px',
    autoplaySpeed: 2500,
    nextArrow: <NextArrow  />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="pt-[140px] pb-[70px]">
      <Container>
        <div className="mb-[60px]">
          <Heading text="Select Category" className="mb-5" />
          <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" />
        </div>
        <div >
          {/* card */}
          <Slider {...settings}>
            <CardCategory
              rating="4.9"
              icon={beach}
              title="Beach Activity"
              des="196 Activities"
            />
            <CardCategory
              rating={4.9}
              icon={Jumping}
              title="Bungee Jump"
              des="196 Activities"
            />
            <CardCategory
              rating={4.9}
              icon={City}
              title="City Tours"
              des="196 Activities"
            />
            <CardCategory
              rating={4.9}
              icon={Backpack}
              title="Hiking trips"
              des="196 Activities"
            />
            <CardCategory
              rating={4.9}
              icon={Jungle}
              title="Jungle trips"
              des="196 Activities"
            />
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default Category;
