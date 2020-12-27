import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../Components/Items/item";
import { DbContext } from "../Services/Context/Db";

const Shop = (props) => {
  const inventory = useContext(DbContext);

  const { type } = useParams();
  useEffect(() => {
    let selection = inventory.db.filter((wine) => wine.type === type);
    setWines(selection);
  }, [inventory, type]);
  const [wines, setWines] = useState([]);

  return (
    <>
      {/* <img
        src={images.leftArrow}
        alt="left arrow"
        width="30px"
        height="30px"
        style={{ cursor: "pointer", position: "absolute", top: "250px" }}
        id="back-to-home"
        onClick={() => props.history.push("/")}
      /> */}
      {/* <Title title={capitalize(type)} /> */}
      <div className="shop">
        {(wines || []).map((item, i) => {
          return (
            <Items
              key={i}
              title={item.title}
              description={item.description}
              pics={item.images}
              price={item.price}
              star={item.star}
            />
          );
        })}
      </div>
    </>
  );
};

export default Shop;
