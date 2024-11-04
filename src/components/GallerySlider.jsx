import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import beach from "../assets/images/Sandy.png";

function GallerySlider() {
  return (
    <div className="w-full">
      <div>
        <Image src={beach} />
      </div>
    </div>
  );
}

export default GallerySlider;
