import React from "react";
import { useAppContext } from "./calculatorState";

export const Buttons = ({ type, value }) => {
  const calculator = useAppContext();

  function handleClick() {
    switch (type) {
      case "number":
        calculator.addNumber(parseInt(value));
        break;
      case "operator":
        calculator.addOperation(value);
        break;
      case "action":
        calculator.executeAction(value);
        break;

      default:
    }
  }
  return <button onClick={handleClick}>{value}</button>;
};
