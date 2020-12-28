import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../Components/Items/item";
import { DbContext } from "../Services/Context/Db";
import images from "../Images/images";

const Shop = (props) => {
  const inventory = useContext(DbContext);
  const [wines, setWines] = useState([]);

  console.log(inventory);
  const { type } = useParams();
  useEffect(() => {
    let selection = inventory.state.wine.filter((wine) => wine.type === type);
    setWines(selection);
  }, [inventory, type]);

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="shop">
      <img
        src={images.leftArrow}
        alt="left arrow"
        width="30px"
        height="30px"
        style={{ cursor: "pointer", position: "absolute", top: "200px" }}
        id="back-to-home"
        onClick={() => props.history.push("/")}
      />

      <h2>{capitalize(type)}</h2>
      <div className="shop-content">
        {(wines || []).map((item, i) => {
          return (
            <Items
              key={i}
              title={item.title}
              description={item.description}
              pics={item.images}
              price={item.price}
              star={item.star}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
