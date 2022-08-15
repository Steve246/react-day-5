import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./css/CalculatorNav.css";

const CalculatorNav = () => {
  const [currentValue, setCurrentValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [operatorValue, setOperatorValue] = useState(null);

  useEffect(() => {}, [operatorValue, nextValue, currentValue]);

  const CalcuOperator = {
    "+": (valueFirst, valueSecond) => valueFirst + valueSecond,
    "-": (valueFirst, valueSecond) => valueFirst - valueSecond,
    "/": (valueFirst, valueSecond) => valueFirst / valueSecond,
    "*": (valueFirst, valueSecond) => valueFirst * valueSecond,
    "=": (valueFirst, valueSecond) => valueSecond,
  };

  const handleNum = (numb) => {
    setNextValue(nextValue === "0" ? String(numb) : nextValue + numb);
    //  0 + nilai yang diinput
  };

  const setOperation = () => {
    var resultOperation = CalcuOperator[operatorValue](
      parseFloat(currentValue),
      parseFloat(nextValue)
    );
    setOperatorValue(null);
    setNextValue(String(resultOperation));
    setCurrentValue(null);
  };

  const clearScreen = () => {
    setCurrentValue(null);
    setNextValue(null);
  };

  const handleOperation = (val) => {
    if (Number.isInteger(val)) {
      handleNum(parseInt(val, 10));
    } else if (val in CalcuOperator) {
      if (operatorValue === null) {
        setOperatorValue(val);
        setCurrentValue(nextValue);
        setNextValue("");
      }
      if (operatorValue !== "") {
        setOperatorValue(val);
      }

      if (currentValue && operatorValue && nextValue) {
        setOperation();
      }
    } else if (val === "C") {
      clearScreen();
    } else {
      alert("Operator tidak ditemukan");
    }
  };

  return (
    <div className="calculator">
      <div className="main-container">
        {" "}
        {currentValue} {operatorValue} {nextValue}{" "}
      </div>
      <div className="second-container">
        <div className="container-button">
          <Button variant="primary" onClick={() => handleOperation(0)}>
            0
          </Button>
          <Button variant="primary" onClick={() => handleOperation(1)}>
            1
          </Button>
          <Button variant="primary" onClick={() => handleOperation(2)}>
            2
          </Button>
          <Button variant="primary" onClick={() => handleOperation(3)}>
            3
          </Button>
        </div>

        <div className="container-button">
          <Button variant="primary" onClick={() => handleOperation(4)}>
            4
          </Button>
          <Button variant="primary" onClick={() => handleOperation(5)}>
            5
          </Button>
          <Button variant="primary" onClick={() => handleOperation(6)}>
            6
          </Button>
          <Button variant="danger" onClick={() => handleOperation("C")}>
            C
          </Button>
        </div>

        <div className="container-button">
          <Button variant="primary" onClick={() => handleOperation(7)}>
            7
          </Button>
          <Button variant="primary" onClick={() => handleOperation(8)}>
            8
          </Button>
          <Button variant="primary" onClick={() => handleOperation(9)}>
            9
          </Button>
          <Button variant="success" onClick={() => handleOperation("=")}>
            {" "}
            ={" "}
          </Button>
        </div>

        <div className="container-button">
          <Button variant="warning" onClick={() => handleOperation("+")}>
            +
          </Button>
          <Button variant="warning" onClick={() => handleOperation("-")}>
            -
          </Button>
          <Button variant="warning" onClick={() => handleOperation("*")}>
            x
          </Button>
          <Button variant="warning" onClick={() => handleOperation("/")}>
            /
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorNav;
