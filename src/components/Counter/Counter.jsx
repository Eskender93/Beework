import React from "react";
import { CounterContainer, CounterValue } from "./Counter.Styled";
import Controls from "./Controls";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    const savedValue = localStorage.getItem("counterValue");
    this.state = {
      value: savedValue ? parseInt(savedValue, 10) : 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => {
      const newValue = prevState.value + 1;
      localStorage.setItem("counterValue", newValue);
      return { value: newValue };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      const newValue = prevState.value - 1;
      localStorage.setItem("counterValue", newValue);
      return { value: newValue };
    });
  };
  render() {
    return (
      <CounterContainer>
        <CounterValue>{this.state.value}</CounterValue>
        <Controls
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      </CounterContainer>
    );
  }
}

export default Counter;
