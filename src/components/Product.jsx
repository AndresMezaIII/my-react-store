//parent of the QuantityPicker
//uses props created in Catalog to manage a parent to child relationship
import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
  return (
    <div className="product-placement">
      <div className="image-container">
        <img src={"/images/" + props.data.image} alt="Lorem Picsum"></img>
      </div>
      <p className="description"> {props.data.description} </p>
      <div className="info-container">
        <h5 className="title"> {props.data.title} </h5>
        <div className="prices">
          <label>Price: {props.data.price}</label>
          <br />
          <label>Total:</label>
        </div>
        <QuantityPicker></QuantityPicker>
      </div>
    </div>
  );
}

export default Product;
