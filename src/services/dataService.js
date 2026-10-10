const CATALOG = [
  {
    title: "Oranges",
    category: "Fruits",
    price: 15,
    image: "placeholder",
    _id: "1",
  },

  {
    title: "Apples",
    category: "Fruits",
    price: 10,
    image: "placeholder",
    _id: "2",
  },

  {
    title: "Bananas",
    category: "Fruits",
    price: 12,
    image: "placeholder",
    _id: "3",
  },
];

class DataService {
  getProduct() {
    return CATALOG;
  }
}

//React logic can be used because the project is configured to work under the React philosophy that everything is a component
export default DataService;
