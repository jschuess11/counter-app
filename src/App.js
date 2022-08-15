import React, { Component } from "react";
import Add from "./Add";
import Subtract from "./Subtract";
import Clear from "./Clear";
import Custom from "./Custom";


class App extends Component {
  state = {
    count: 0,
  };

  addClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  subtractClick = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  clearClick = () => {
    this.setState({
      count: 0,
    });
  };

  custom = (number) => {
    let input = parseInt(number);
    this.setState({ count: this.state.count + input });
  };

  render() {
    return (
      <div className="container bg-danger text-center py-2">
        <h1>Counting App</h1>
        <h2>Count: {this.state.count}</h2>
        <div className="py-1">
        <Add handleChange={this.addClick} />
        <Subtract handleChange={this.subtractClick} />
        <Clear handleChange={this.clearClick} />
        </div>
        <Custom custom={this.custom} />
      </div>
    );
  }
}

export default App;
