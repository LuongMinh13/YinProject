import React, { useEffect, useState } from "react";
import "../assets/Css/HeroContent.css";
import mainimage from "../assets/Image/Mamasi.jpg";
import layoutimage from "../assets/Image/Mamasi_layout.png";
import TitleHome from "./TitleHome";
import FooterHeroHome from "./FooterHeroHome";
import ButtonHero from "../assets/ReUseComponent/ButtonHero";
import FooterHomePage from "./FooterHomePage";
import TitleHomeHero from "./TitleHomeHero";
import Homehero from "./Homehero";

function HomeContent() {
  const [sliderDimensions, setSliderDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Obtient les dimensions de la première image
  const getImageDimensions = (src) => {
    const img = new Image();
    img.onload = () => {
      setSliderDimensions({
        width: img.width * 0.79,
        height: img.height * 0.72,
      });
    };
    img.src = src;
  };

  useEffect(() => {
    getImageDimensions(mainimage);
  }, []);

  return (
    <>
      <div
        className="home-view"
        // style={{
        //   width: sliderDimensions.width,
        //   height: sliderDimensions.height,
        // }}
      >
        <div className="main-bg">
          <div className="main-photo _active">
            <img src={mainimage} className="main-img" alt="mainimage" />
            <TitleHome />
            <img src={layoutimage} className="layout-img" alt="layouimage" />
          </div>
        </div>
        <section className="home-hero">
          <Homehero />
          <FooterHeroHome />
        </section>
        <div className="hero-button">
          <ButtonHero />
        </div>
        <TitleHomeHero />
        <FooterHomePage />
      </div>
    </>
  );
}

export default HomeContent;
