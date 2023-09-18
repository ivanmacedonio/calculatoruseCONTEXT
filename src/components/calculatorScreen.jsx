import React from "react";
import { useAppContext } from "./calculatorState";

export const CalculatorScreen = () => {
  const calculator = useAppContext();
  return (
    <div className="calculatorScreen">
      <div>
        Memory: {calculator.memory}
        operation: {calculator.operation}
      </div>
      <div className="calculatorCurrentValue">
        {calculator.currentValue}
        {calculator.isDecimal ? "." : ""}
      </div>
    </div>
  );
};
