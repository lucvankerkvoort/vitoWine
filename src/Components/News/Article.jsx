import React from "react";

const Article = ({ article }) => {
  const { title, text, image } = article;
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>{image}</p>
    </div>
  );
};

export default Article;
