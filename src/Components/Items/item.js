import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "../../Images/images";
import { DbContext } from "../../Services/Context/Db";

const Items = ({ title, price, pics, star, description, id }) => {
  const [starArray, setStarArray] = useState([]);

  const { getOne } = useContext(DbContext);
  useEffect(() => {
    let flatStarRate = Math.round(star);
    console.log(flatStarRate);
    const starArray = [];
    for (let i = 0; i < 5; i++) {
      if (flatStarRate > i) {
        starArray.push(images.starFilled);
      } else {
        starArray.push(images.starEmpty);
      }
    }

    setStarArray(starArray);
  }, [star]);
  return (
    <div className="item">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => {
          getOne({ type: "wine", id });
        }}
        to="/spec"
      >
        <div className="picture">
          <div
            style={{
              background: `url(${pics})`,
            }}
          />
        </div>
      </Link>
      <div className="item-title">
        <h1>{title}</h1>
      </div>

      <div className="price">
        <p>{price},00</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <p>
          {star}
          {(starArray || []).map((item) => (
            <img src={item} alt="..." height="40px" />
          ))}
        </p>
      </div>
    </div>
  );
};
export default Items;
