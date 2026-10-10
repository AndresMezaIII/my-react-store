import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker() {
  //an array of variables in which all will be referenced therein, but have separate spaces in memory; quantity is a global variable. [quantity, setQuantity] is React notation. The first value is the variable, the second is the variable function and they can be named anything. making them equal to useState(1) is also part of React's notation and together, the expression logic is used that is built in the React framework.
  const [quantity, setQuantity] = useState(1);
  //state variables are global, persistent, and can have many different instances because they are not in the same scope. A reused function recreates the element instead of replacing it, so duplicate elements does not = an attempt to use the same variable. each variable (and function call ??) has its own space in memory.
  function handleDecrease() {
    let nextValue = quantity - 1;
    if (nextValue > 0) {
      setQuantity(nextValue);
    }
  }
  function handleIncrease() {
    let nextValue = quantity + 1;
    //quantity = nextValue; this is not allowed
    setQuantity(nextValue);
  }

  return (
    //using className because class is a reserved word in JavaScript and you cannot duplicate this word
    //anything in html that is enclosed in {} is JavaScript
    <div className="quantity-picker">
      <button className="btn-minus" onClick={handleDecrease}>
        -
      </button>
      <label className="label-qty">{quantity}</label>
      <button className="btn-plus" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
