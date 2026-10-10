import "./App.css";
import Navbar from "./components/navbar";
import QuantityPicker from "./components/quantitypicker";

function App() {
  function handleDecrease() {}
  function handleIncrease() {}

  return (
    <div>
      <h1>Hello from React!</h1>
      <Navbar />
      <QuantityPicker />
    </div>
  );
}

export default App;
