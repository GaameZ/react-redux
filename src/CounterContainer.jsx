import React, { Component } from "react";
import { connect } from "react-redux";

class CounterComponent extends Component {
  render() {
    const { number, dispatch } = this.props;
    return (
      <div>
        <p>{number}</p>
        <button onClick={() => dispatch({ type: "ADD" })}>+</button>
        <button onClick={() => dispatch({ type: "ADD-TEN" })}>++</button>
        <button onClick={() => dispatch({ type: "RESET" })}>0</button>
        <button onClick={() => dispatch({ type: "REMOVE" })}>-</button>
        <button onClick={() => dispatch({ type: "REMOVE-TEN" })}>--</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  number: state
});
const CounterContainer = connect(mapStateToProps)(CounterComponent);
export default CounterContainer;
