//parent of Product
import "./Catalog.css";
import Product from "../components/Product";
function Catalog() {
  return (
    <div className="catalog-container">
      <h1>Check our new products</h1>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </div>
  )
}

export default Catalog;
