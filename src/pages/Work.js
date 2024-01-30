import React, { useRef, useState } from "react";
import NavBar from "../components/Navbar";
import "../assets/Css/Work/Work.css";
import "../assets/Css/Work/Card.css";
// import Card from "../components/Work/Card";
import ImageSlider from "../services/data";

function Work() {
  const [scrolled, setScrolled] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      if (scrollPosition > 300) {
        setScrolled(true);
        console.log(scrolled);
      } else {
        setScrolled(false);
        console.log(scrolled);
      }
    }
  };

  const handleWheelScroll = (event) => {
    if (scrollContainerRef.current) {
      event.preventDefault();
      const delta = Math.max(-1, Math.min(1, event.deltaY || -event.detail));
      scrollContainerRef.current.scrollLeft += delta * 400;
    }
  };

  return (
    <>
      <div className="wrapper">
        <NavBar />
        <div className="category-view">
          <div className="page-content__wrap">
            <div className="hero-title">
              <div
                className={
                  `category-title vt h3 ${scrolled ? " smaller" : "reverse-smaller"}`
                }
              >
                <div className="category-title-text">Portraits</div>
              </div>
            </div>
            <div className="hero-descr">
              <div
                className={
                  scrolled ? "category-descr vt disappear" : "category-descr vt"
                }
              >
                Through my lens, I capture the unique charm in every individual.
                My portraits blend your distinct style with a polished
                aesthetic, each frame echoing your personal sophistication.
              </div>
            </div>
            <div className="hero-actions">
              <div
                className={
                  scrolled
                    ? "category-count vt h5 disappear"
                    : "category-count vt h5"
                }
              >
                ({ImageSlider.length})
              </div>
            </div>
          </div>
          {/* <Card /> */}
          <div
            className="category-gallery__slider"
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onWheel={handleWheelScroll}
          >
            <div className="category-gallery__wrap">
              {ImageSlider.map((img, index) => (
                <div className={`category-gallery__item${index + 1}`}>
                  <div className="category-gallery__img">
                    <img
                      key={index}
                      className="category-gallery__photo"
                      src={img.mainimage}
                      alt={index + 1}
                    />
                  </div>
                  <div className="category-gallery__name __uppercase">
                    <div
                      key={img.namemodel}
                      className="category-gallery__name-text h5"
                    >
                      {img.namemodel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
