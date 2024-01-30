import React, { useState } from "react";
import ImageSlider from "../assets/SliderHome/data";
import SliderHome from "./SliderHome";

function ContentSlider() {
  return (
    <>
      {ImageSlider.map((image) => {
        <SliderHome
          mainimage={image.mainimage}
          layoutimage={image.layoutimage}
        />;
      })}
    </>
  );
}

export default ContentSlider;
