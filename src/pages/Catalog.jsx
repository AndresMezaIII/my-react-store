//parent of Product
import "./Catalog.css";
import Product from "../components/Product";
import { useState, useEffect } from "react";
import DataService from "../services/dataService.js";

function Catalog() {
  //creating a state variable
  const [PRODUCTS, setProducts] = useState([]);
  useEffect(() => {
    //runs and inspects for change, load the data here
    let service = new DataService();
    let data = service.getProduct();
    //assign the data from service.getProduct() into PRODUCTS and setProducts
    setProducts(data);
  }, []); //the empty array means this effect runs only once at load, and when the content updates

  return (
    <div className="catalog-container">
      <h1>Welcome to the Shoppe</h1>
      {PRODUCTS.map((prod) => (
        <Product key={prod._id} data={prod} /> //the Product key = solves the dynamic identity problem for the Product components being created. data = {prod} creates a Prop to pass data between parent and child
      ))}
    </div>
  );
}

export default Catalog;
