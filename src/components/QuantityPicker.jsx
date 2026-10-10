import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker() {
  return (
    //using className because class is a reserved word in JavaScript and you cannot duplicate this word
    <div className="quantity-picker">
      <button className="btn-minus" onClick={handleDecrease}>
        -
      </button>
      <label className="label-qty">1</label>
      <button className="btn-plus" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
