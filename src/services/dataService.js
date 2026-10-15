//images are in the public folder which is accessible from anywhere, no need to specify the path
const CATALOG = [
  {
    title: "Oranges",
    category: "Fruits",
    price: "$6",
    image: "oranges.png",
    _id: "1",
    description:
      "Bite into locally sourced Florida Oranges with a sweet and juicy taste guaranteed to refresh! Our oranges are farmed with organic pesticide, not chemicals, and harvested during prime Summer time!",
  },

  {
    title: "Hoodie",
    category: "Clothing",
    price: "$40",
    image: "hoodie.png",
    _id: "2",
    description:
      "A comfortable 100% cotton hoody to sport today's fashion and your school spirit! Textiles are fair trade sourced from field to factory.",
  },

  {
    title: "Coffee",
    category: "Beverages",
    price: "$12",
    image: "coffe.png",
    _id: "3",
    description:
      "Fair Trade Organic coffee beans grown in the Peruvian mountains. Enjoy a steaming cup of refreshing joe!",
  },

  {
    title: "Chocolate",
    category: "Candy",
    price: "$8",
    image: "choco.png",
    _id: "4",
    description:
      "Fair Trade Organic chocolate from Honduras. Enjoy this 40% cocoa dark chocolate bar with almonds.",
  },
];

class DataService {
  getProduct() {
    return CATALOG;
  }
}

//React logic can be used because the project is configured to work under the React philosophy that everything is a component
export default DataService;
