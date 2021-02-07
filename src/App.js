import { Component } from "react";

function App() {
  return (
    <>
      <Counter></Counter>
    </>
  );
}

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }
  handlePlusButton = () => {
    // this.state = { count: this.state.count + 1 };
    // 状態を変える時にはsetStateを使わないといけない
    this.setState({ count: this.state.count + 1});
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1});
  }
  render() {
    console.log('render');
    return (
      <>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </>
    );
  }
}

export default App;
