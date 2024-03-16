import React, { useState } from "react";
import "./Carousel.css";

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="carousel">
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div
              key={index}
              className={index === currentIndex ? "slide active" : "slide"}
            >
              <img src={item.imageUrl} alt={item.title} />
              <div className="carousel-caption">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={goToPrev}>
          Prev
        </button>
        <button className="carousel-control next" onClick={goToNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
