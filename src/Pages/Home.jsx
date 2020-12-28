import React from "react";
import Deals from "../Components/Deals/Deals";
import News from "../Components/News/News";

const Home = () => {
  return (
    <div className="home">
      <h6>Good D-Vine</h6>
      <Deals />
      <News />
    </div>
  );
};

export default Home;
