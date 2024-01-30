import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/ButtonHero.css";

function ButtonHero() {
  const [buttonAnimation, setButtonAnimation] = useState(false);

  const handleMouseEnter = () => {
    setButtonAnimation(true);
  };

  const handleMouseLeave = () => {
    setButtonAnimation(false);
  };

  return (
    <>
      <Link
        className="home-hero-btn"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          class="home-hero-btn__line"
          viewBox="0 0 220 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M140.775 53C191.139 41.1649 219.284 7.22883 119.344 1.62734C-0.671907 -5.09936 -39.2484 44.3927 49.6919 48.6963C123.599 52.2726 192.211 33.9922 219 21.7985"
            stroke="white"
            stroke-width="1.5"
            className={
              buttonAnimation ? "activeButton" : "home-hero-btn__container"
            }
          ></path>
        </svg>
        <span className="home-hero-btn__first tf1">View</span>
        <span className="home-gallery-btn__second tf2 s32">shooting</span>
      </Link>
    </>
  );
}

export default ButtonHero;
