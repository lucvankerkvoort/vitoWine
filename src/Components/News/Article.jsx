import React from "react";
import images from "../../Images/images";
const Article = ({ article, id }) => {
  const { title, text, image } = article;
  return (
    <div
      className={
        id === 0 ? "carousel-item article active" : "carousel-item article"
      }
    >
      <h1>{title}</h1>
      <div className="carousel-item-content">
        <img src={images.Logo} alt="..." height="20px" />
        <div>
          <p>{text}</p>
          <p>{image}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
