import React from "react";
import { CalculatorState } from "./calculatorState";
import { CalculatorScreen } from "./calculatorScreen";
import { Buttons } from "./buttons";

export const Calculator = () => {
  return (
    <CalculatorState>
      <div className="calculatorContainer">
        <CalculatorScreen />
        <div className="container">
          <Buttons type="action" value="AC">
            AC
          </Buttons>
          <Buttons type="operator" value="%">
            {" "}
            %
          </Buttons>
          <Buttons type="action" value="<==">
            {" "}
            ///
          </Buttons>
          <Buttons type="operator" value="/">
            {" "}
            /
          </Buttons>
          <Buttons type="number" value="7">
            {" "}
            7
          </Buttons>
          <Buttons type="number" value="8">
            {" "}
            8
          </Buttons>
          <Buttons type="number" value="9">
            {" "}
            9
          </Buttons>
          <Buttons type="operator" value="*">
            *{" "}
          </Buttons>
          <Buttons type="number" value="4">
            {" "}
            4
          </Buttons>
          <Buttons type="number" value="5">
            {" "}
            5
          </Buttons>
          <Buttons type="number" value="6">
            {" "}
            6
          </Buttons>
          <Buttons type="operator" value="-">
            {" "}
            -{" "}
          </Buttons>
          <Buttons type="number" value="1">
            1{" "}
          </Buttons>
          <Buttons type="number" value="2">
            {" "}
            2
          </Buttons>
          <Buttons type="number" value="3">
            {" "}
            3
          </Buttons>
          <Buttons type="operator" value="+">
            +{" "}
          </Buttons>
          <Buttons type="action" value="+/-">
            {" "}
            +/-
          </Buttons>
          <Buttons type="number" value="0">
            {" "}
            0
          </Buttons>
          <Buttons type="action" value=".">
            .{" "}
          </Buttons>
          <Buttons type="action" value="=">
            ={" "}
          </Buttons>
        </div>
      </div>
    </CalculatorState>
  );
};
