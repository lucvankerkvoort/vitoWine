import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Offer from "./Offer";

const Deals = () => {
  const offers = [
    { title: "Title", description: "1", image: "Image" },
    { title: "Title", description: "2", image: "Image" },
    { title: "Title", description: "3", image: "Image" },
    { title: "Title", description: "4", image: "Image" },
  ];
  return (
    <Carousel className="offer">
      {offers.map((offer, i) => (
        <Offer key={i} offer={offer} id={i} />
      ))}
    </Carousel>
  );
};

export default Deals;
