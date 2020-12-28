import React from "react";
import Article from "./Article";
const News = () => {
  const articles = [{ title: "Yello", text: "test", image: "image" }];
  return (
    <div>
      {(articles || []).map((article, i) => (
        <Article key={i} article={article} />
      ))}
    </div>
  );
};

export default News;
