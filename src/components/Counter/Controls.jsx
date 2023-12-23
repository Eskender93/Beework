import React from "react";
import { CounterControls, ControlersBox } from "./Counter.Styled";

const Controls = ({ handleIncrement, handleDecrement }) => {
  return (
    <ControlersBox>
      <CounterControls type="button" onClick={handleIncrement}>
        Увеличить на 1
      </CounterControls>
      <CounterControls type="button" onClick={handleDecrement}>
        Уменьшить на 1
      </CounterControls>
    </ControlersBox>
  );
};

export default Controls;
