import React, { Component } from "react";
import "../styles.css";

//const [matriz, setMat] = useState([1, 2, 3]);

class Card extends Component {
  state = {
    count: "0"
  };

  Reset() {
    this.setState({
      count: "0"
    });
  }

  Calculate() {
    const { count } = this.state;
    this.setState({
      count: eval(count)
    });
  }

  changeValue(digit) {
    const { count } = this.state;
    this.setState({
      count: count === "0" ? String(digit) : count + digit
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <input value={this.state.count} />
        </div>
        <div className="row">
          <button onClick={() => this.changeValue(1)}>1</button>
          <button onClick={() => this.changeValue(2)}>2</button>
          <button onClick={() => this.changeValue(3)}>3</button>
          <button onClick={() => this.changeValue("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => this.changeValue(4)}>4</button>
          <button onClick={() => this.changeValue(5)}>5</button>
          <button onClick={() => this.changeValue(6)}>6</button>
          <button onClick={() => this.changeValue("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => this.changeValue(7)}>7</button>
          <button onClick={() => this.changeValue(8)}>8</button>
          <button onClick={() => this.changeValue(9)}>9</button>
          <button onClick={() => this.changeValue("*")}>*</button>
        </div>
        <div className="row-zero">
          <button onClick={() => this.changeValue(0)}>0</button>
          <button onClick={() => this.changeValue("/")}>/</button>
        </div>
        <div className="row">
          <button
            id="igual"
            className="calculate"
            onClick={() => this.Calculate()}
          >
            =
          </button>
        </div>
        <div className="row">
          <button id="reset" onClick={() => this.Reset()}>
            C
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
