import React, { useRef } from "react";
import '../styles/food.css'
import right from "../images/right.png"


const FoodCarousel = ({ items }) => {
  const carouselRef = useRef(null);

  const scrollForward = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

 
  const scrollBackward = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-container">
      {/* Heading and arrows */}
      <div className="header-container">
        <div>
        <h2>Order Our Best Food Options</h2>
        </div>
        <div>
        <button className="scroll-button backward" onClick={scrollBackward}>
          <img src={right} alt="" height="20px" width="20px" />
        </button>
        <button className="scroll-button forward" onClick={scrollForward}>
        <img src={right} alt="" height="20px" width="20px" />
        </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel" ref={carouselRef}>
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.image} alt={item.name} className="food-image" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCarousel;
