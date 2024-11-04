import React from "react";
import Banner from "../components/layouts/Banner";
import Header from "../components/layouts/Header";
import Category from "../components/layouts/Category";
import Trending from "../components/layouts/Trending";
import Destinations from "../components/layouts/Destinations";
import BestSeller from "../components/layouts/BestSeller";
import Tourguides from "../components/layouts/Tourguides";
import Promotion from "../components/layouts/Promotion";
import Newsletter from "../components/layouts/Newsletter";
import Contact from "../components/layouts/Contact";

// For Swiper core and required modules
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// for Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
  return (
    <>
      <Header />
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        speed={1000}
        navigation={{
          nextEl: ".my-button-next",
          prevEl: ".my-button-prev",
        }}
      >
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Banner className="bg-banner2" />
        </SwiperSlide>
        <SwiperSlide>
          <Banner className="bg-banner3" />
        </SwiperSlide>
      </Swiper>
      <Category />
      <Trending />
      <Destinations />
      <BestSeller title="Best Seller"/>
      <Tourguides />
      <Promotion />
      <Newsletter />
      <Contact />
    </>
  );
}

export default Home;
