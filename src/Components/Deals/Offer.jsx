import React from "react";

const Offer = ({ offer }) => {
  const { title, description, image } = offer;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{image}</p>
    </div>
  );
};

export default Offer;
