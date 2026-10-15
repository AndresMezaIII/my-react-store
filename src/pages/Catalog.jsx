//parent of Product
import "./Catalog.css";
import Product from "../components/Product";
import { useState, useEffect } from "react";
import DataService from "../services/dataService.js";

function Catalog() {
  //creating a state variable
  const [PRODUCTS, setProducts] = useState([]);
  const [PRODUCTSTODISPLAY, setDisplayProducts] = useState([]); //variable that holds the products to show
  const [CATEGORIES, setCategory] = useState([]); //variable that holds the category

  useEffect(() => {
    //runs and inspects for change, load the data here
    let service = new DataService();
    let data = service.getProduct();
    //assign the data from service.getProduct() into PRODUCTS and setProducts
    setProducts(data);
    setDisplayProducts(data); //populate all data if no filter is applied
    let categories = ["Fruits", "Candy", "Beverages", "Clothing"];
    setCategory(categories);
  }, []); //the empty array means this effect runs only once at load, and when the content updates

  function filter(chosenCategory) {
    let catList = [];
    //find matching products
    for (let i = 0; i < PRODUCTS.length; i++) {
      //the PRODUCTS used ^here^ has everything
      let prod = PRODUCTS[i];
      if (prod.category === chosenCategory) {
        catList.push(prod);
      }
    }
    setDisplayProducts(catList);
  }

  function clearFilters() {
    setDisplayProducts(PRODUCTS);
  }

  return (
    <div className="catalog-container">
      <h1>Welcome to the Shoppe</h1>
      {CATEGORIES.map((tempCategory) => (
        <button
          key={tempCategory}
          className="cats"
          onClick={() => filter(tempCategory)}
        >
          {tempCategory}
        </button>
      ))}
      <button className="cats" onClick={clearFilters}>
        All
      </button>
      <div className="product-container">
        {PRODUCTSTODISPLAY.map((prod) => (
          <Product key={prod._id} data={prod} /> //the Product key = solves the dynamic identity problem for the Product components being created. data = {prod} creates a Prop to pass data between parent and child
        ))}
      </div>
    </div>
  );
}

export default Catalog;
