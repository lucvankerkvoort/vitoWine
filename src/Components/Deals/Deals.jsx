import React from "react";
import Offer from "./Offer";

const Deals = () => {
  const offers = [
    { title: "Title", description: "Description", image: "Image" },
  ];
  return (
    <div>
      {offers.map((offer, i) => (
        <Offer key={i} offer={offer} />
      ))}
    </div>
  );
};

export default Deals;
