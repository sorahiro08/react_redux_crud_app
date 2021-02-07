import { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions";
class App extends Component {
  render() {
    const props = this.props;
    console.log('render');

    return (
      <>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    );
  }
}

const mapStateToProps = state => ({ value: state.count.value });
const mapDispatchToProps = ({ increment, decrement });
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });
// const mapDispatchToProps = dispatch => {
//   return ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//   });
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
