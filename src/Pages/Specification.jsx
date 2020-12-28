import React, { useContext, useState } from "react";
import images from "../Images/images";
import { DbContext } from "../Services/Context/Db";

const Specification = (props) => {
  const [quantity, setQuantity] = useState(1);
  const wine = useContext(DbContext);
  console.log(wine);
  const goBack = props.history.goBack;

  const { title, description, star } = wine.state.selection;

  return (
    <div className="specification">
      <div className="title-spec">
        <img
          src={images.leftArrow}
          alt="left arrow"
          width="30px"
          height="30px"
          className="back-to-shopping"
          onClick={() => goBack()}
        />
      </div>
      <div className="product-spec">
        <div className="picture-spec"></div>
        <div className="detail-spec">
          <h1>{title}</h1>
          <p> {description}</p>
          <div>{star} stars</div>

          <form>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <button type="submit">Add To Basket</button>
          </form>
          <table>
            <tr>
              <td>Classification:</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Brand:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Vintage:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Region:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Volume:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Condition:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Label:</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Stock:</td>
              <td>test</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Specification;
