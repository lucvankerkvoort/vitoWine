import React, { useState } from "react";

const Carousel = ({ className, children }) => {
  const [active, setActive] = useState(0);
  const handleCarousel = (input) => {
    let carouselItems = document.getElementsByClassName(className);
    console.log(carouselItems);
    if (carouselItems.length > 1) {
      if (input === "next") {
        carouselItems[active].classList.remove("active");
        carouselItems[
          active < carouselItems.length - 1 ? active + 1 : 0
        ].classList.add("active");
        active < carouselItems.length - 1
          ? setActive(active + 1)
          : setActive(0);
      } else {
        carouselItems[active].classList.remove("active");
        carouselItems[
          active > 0 ? active - 1 : carouselItems.length - 1
        ].classList.add("active");
        active > 0
          ? setActive(active - 1)
          : setActive(carouselItems.length - 1);
      }
    }
  };
  return (
    <div className="carousel">
      {children}
      <button className="next" onClick={() => handleCarousel("next")} />
      <button className="previous" onClick={() => handleCarousel("previous")} />
    </div>
  );
};

export default Carousel;
