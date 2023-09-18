import React, { createContext, memo, useContext, useState } from "react";

const AppContext = createContext({
  memory: null,
  operation: null,
  currentValue: 0,
  isDecimal: false,

  addNumber: (value) => {},
  addOperation: (operation) => {},
  getResult: () => {},
  executeAction: (action) => {},
});

export const CalculatorState = ({ children }) => {
  const [memory, setMemory] = useState(null);
  const [operation, setOperation] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [isReset, setIsReset] = useState(true);
  ///reset true indica que el valor actual esta vacio
  const [isDecimal, setIsDecimal] = useState(false);

  function handleAddNumber(value) {
    console.log(value);
    if (isReset) {
      if (value === ".") {
        setIsDecimal(true);
      } else {
        const point = isDecimal ? "." : "";
        const newValue = currentValue.toString() + point + value.toString();
        setCurrentValue(parseFloat(newValue));
        setIsReset(false);
        setIsDecimal(false);
      }
    } else {
      if (value === ".") {
        setIsDecimal(true);
      } else {
        const point = isDecimal ? "." : "";
        const newValue = currentValue.toString() + point + value.toString();
        setIsDecimal(false);
        setCurrentValue(parseFloat(newValue));
      }
    }
  }
  function handleAddOperation(op) {
    if (currentValue) {
      if (operation) {
        ///si ya hay una operacion registrada en memoria, volver a pulsar otra op debe resolver
        handlegetResult();
        setOperation();
      } else {
        ///resetea la pantalla para indicar el proximo numero para operar
        setOperation(op);
        setMemory(currentValue);
        setCurrentValue(0);
        setIsReset(true);
      }
    }
  }

  function clean() {
    setCurrentValue(0);
    setOperation(null);
    setMemory(0);
    setIsReset(true);
    setIsDecimal(false)

  }

  function deleter() {
    setCurrentValue(parseInt(currentValue / 10));
    ///56 / 10 == 5.6 === 5
    ///-23 /10 == -2.3 == -2
  }

  function changeSign() {
    setCurrentValue(currentValue * -1);
  }

  function convert() {
    if (currentValue.toString().indexOf(".") > 0) {
      //el n ya es float
    } else {
      handleAddNumber(".");
    }
  }

  function handlegetResult() {
    let result = 0;
    if (currentValue && operation && memory) {
      switch (operation) {
        case "+":
          result = parseFloat(currentValue) + parseFloat(memory);
          break;
        case "-":
          result = parseFloat(memory) - parseFloat(currentValue);
          break;
        case "*":
          result = parseFloat(currentValue) * parseFloat(memory);
          break;
        case "/":
          result = parseFloat(memory) / parseFloat(currentValue);
          break;
        case "%":
          result = (parseFloat(memory) / 100) * parseFloat(memory);
          break;
        case "+/-":
          changeSign();
          break;
        case ".":
          console.log("hola");
          convert();
          break;

        default:
      }
      setCurrentValue(result);
      setOperation(null);
      setMemory(result);
      setIsReset(true);
      setIsDecimal(false)
    }
  }

  ///manejamos el "="
  function handleExecuteAction(action) {
    switch (action) {
      case "=":
        handlegetResult();
        break;
      case "AC":
        clean();
        break;
      case "<==":
        deleter();
        break;
      case ".":
        console.log("hola");
        convert();
        break;

      default:
    }
  }

  return (
    <AppContext.Provider
      value={{
        memory,
        operation,
        currentValue,
        isDecimal,
        addNumber: handleAddNumber,
        addOperation: handleAddOperation,
        getResult: handlegetResult,
        executeAction: handleExecuteAction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
