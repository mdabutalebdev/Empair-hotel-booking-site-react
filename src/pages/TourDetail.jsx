import React from "react";
import Header2 from "../components/layouts/Header2";
import Container from "../components/Container";
import GallerySlider from "../components/GallerySlider";
import BestSeller from "../components/layouts/BestSeller";
import Breadcrumb from "../components/Breadcrumb";
import Flex from "../components/Flex";
import a1 from "../assets/images/thumb1.png";
import a2 from "../assets/images/thumb2.png";
import a3 from "../assets/images/thumb3.png";
import a4 from "../assets/images/thumb4.png";
import Image from "../components/Image";
import TourDescription from "../components/layouts/TourDescription";
import TourBooking from "../components/layouts/TourBooking";

function TourDetail() {
  return (
    <>
      <Header2 />
      <Container>
        <Flex className="gap-10">
          <div className="flex flex-col gap-4">
            <Image src={a1} />
            <Image src={a2} />
            <Image src={a3} />
            <Image src={a4} />
          </div>
          <Flex className="flex-col">
            <GallerySlider />
            <Breadcrumb className='mt-10 ps-0' />
            <Flex className='justify-between'>
            <TourDescription/>
            <TourBooking/>
            </Flex>
          </Flex>
        </Flex>
        <BestSeller title="Similar Tours" />
      </Container>
    </>
  );
}

export default TourDetail;
