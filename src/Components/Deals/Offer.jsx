import React from "react";

const Offer = ({ offer, id }) => {
  const { title, description, image } = offer;
  return (
    <div
      className={
        id === 0 ? "carousel-item offer active" : "carousel-item offer"
      }
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{image}</p>
    </div>
  );
};

export default Offer;
