import React, { useEffect } from "react";
import "../assets/Css/TitleHome.css";
import maintitle from "../assets/Svg/Title.svg";

function TitleHome() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scaleValue = 1 + scrollPosition / 1000;
      const opacityValue = 1 - scrollPosition / 400;
      const svgElement = document.getElementById("scroll-svg");
      svgElement.style.transform = `scale(${scaleValue})`;
      svgElement.style.opacity = opacityValue < 0 ? 0 : opacityValue;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="title_wrap">
      <div className="home-hero-title">
        <div className="home-hero-title__wrap">
          <img
            id="scroll-svg"
            className="scroll-svg"
            src={maintitle}
            alt="title"
          />
        </div>
      </div>
    </div>
  );
}

export default TitleHome;
