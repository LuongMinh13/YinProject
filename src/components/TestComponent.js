import React, { useEffect, useState } from "react";
import "./TestComponent.css";
import ImageSlider from "../assets/SliderHome/data";

function TestComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderDimensions, setSliderDimensions] = useState({ width: 0, height: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex(prevIndex => (prevIndex + 1) % ImageSlider.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Durée de l'animation (1 seconde)
    }, 5000); // Changement toutes les 5 secondes

    return () => clearInterval(interval);
  }, [ImageSlider.length]);

  const getImageDimensions = (src) => {
    const img = new Image();
    img.onload = () => {
        setSliderDimensions({ width: img.width * 0.79, height: img.height * 0.72 });
    };
    img.src = src;
};


useEffect(() => {
    console.log(sliderDimensions);
    getImageDimensions(ImageSlider[0].mainimage); // Obtient les dimensions de la première image
}, [ImageSlider]);

  return (
    <div className="home-view" style={{ width: sliderDimensions.width, height: sliderDimensions.height }}>
      <div className="main-bg">
        {ImageSlider.map((slide, index) => (
          <div className={index === currentIndex ? 'main-photo active' : 'main-photo'} key={index}>
            <img
              className={isAnimating ? 'main-img slide-animation' : 'main-img'}
              src={slide.mainimage}
            />
            <img
              className={isAnimating ? 'layout-img slide-animation' : 'layout-img'}
              src={slide.layoutimage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default TestComponent;
