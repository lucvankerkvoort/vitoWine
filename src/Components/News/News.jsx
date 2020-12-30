import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Article from "./Article";
const News = () => {
  const articles = [
    { title: "Yello", text: "1", image: "image" },
    { title: "Yello", text: "2", image: "image" },
    { title: "Yello", text: "3", image: "image" },
  ];
  return (
    <Carousel className="article">
      {(articles || []).map((article, i) => (
        <Article key={i} article={article} id={i} />
      ))}
    </Carousel>
  );
};

export default News;
