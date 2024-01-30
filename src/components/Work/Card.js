import React, { useRef } from "react";
import ImageSlider from "../../services/data";
import "../../assets/Css/Work/Card.css";

function Card() {
  const scrollContainerRef = useRef(null);
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      console.log(scrollPosition);
    }
  };

  const handleWheelScroll = (event) => {
    if (scrollContainerRef.current) {
      event.preventDefault();
      const delta = Math.max(-1, Math.min(1, event.deltaY || -event.detail));
      scrollContainerRef.current.scrollLeft += delta * 600; // Ajuste la vitesse du défilement ici
    }
  };
  return (
    <>
      <div
        className="category-gallery__slider"
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onWheel={handleWheelScroll}
      >
        <div className="category-gallery__wrap">
          {ImageSlider.map((img, index) => (
            <div className="category-gallery__item">
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
    </>
  );
}

export default Card;
