import "./App.css";
import { useState } from "react";
import store from "./store/store";
import { addNumber, subtractNumber } from "./actions/counterActions";
import { connect } from "react-redux";
/*
let sum = 10;
function add(a, b) {
  a = 10;
  b = 20;
  sum += a + b;
  return sum;
}

console.log(add(10, 20));

console.log(add(10, 20));

console.log(add(10, 20));
*/

/*
store.dispatch({
  // action is an object with type property
  type: "ADD_NUMBER",
});*/
//console.log("counter", store.getState());

function App(props) {
  const { count } = props;
  console.log("count", count);
  // const [counter, setCounter] = useState(count);
  return (
    <div className="App">
      <div>Counter: {count}</div>
      <button
        onClick={() => {
          store.dispatch(addNumber()); // calls reducer when action is dispatched
          // setCounter(count);
        }}
      >
        Add
      </button>
      <button onClick={() => store.dispatch(subtractNumber())}>Subtract</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("state", state);

  return {
    count: state,
  };
};

export default connect(mapStateToProps)(App);
