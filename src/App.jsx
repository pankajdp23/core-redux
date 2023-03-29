import "./App.css";
import { useState } from "react";
import store from "./store/store";
import { addNumber, subtractNumber } from "./actions/counterActions";
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

function App() {
  const [counter, setCounter] = useState(store.getState());
  return (
    <div className="App">
      <div>Counter: {counter}</div>
      <button
        onClick={() => {
          store.dispatch(addNumber()); // calls reducer when action is dispatched
          setCounter(store.getState());
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          store.dispatch(subtractNumber());
          setCounter(store.getState());
        }}
      >
        Subtract
      </button>
    </div>
  );
}

export default App;
