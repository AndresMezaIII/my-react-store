//images are in the public folder which is accessible from anywhere, no need to specify the path
const CATALOG = [
  {
    title: "Oranges",
    category: "Fruits",
    price: "$6",
    image: "oranges.png",
    _id: "1",
  },

  {
    title: "Hoodie",
    category: "Clothing",
    price: "$40",
    image: "hoodie.png",
    _id: "2",
  },

  {
    title: "Coffee",
    category: "Hot Beverages",
    price: "$12",
    image: "coffe.png",
    _id: "3",
  },

  {
    title: "Chocolate",
    category: "Food",
    price: "$8",
    image: "choco.png",
    _id: "4",
  },
];

class DataService {
  getProduct() {
    return CATALOG;
  }
}

//React logic can be used because the project is configured to work under the React philosophy that everything is a component
export default DataService;
