import "./App.css";
import { addNumber, subtractNumber } from "./actions/counterActions";
import { connect, useDispatch, useSelector } from "react-redux";
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
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("count", count);
  // const [counter, setCounter] = useState(count);
  return (
    <div className="App">
      <div>Counter: {count}</div>
      <button
        onClick={() => {
          dispatch(addNumber(5)); // calls reducer when action is dispatched
          // setCounter(count);
        }}
      >
        Add
      </button>
      <button onClick={() => dispatch(subtractNumber())}>Subtract</button>
    </div>
  );
}
/* // older way
const mapStateToProps = (state) => {
  console.log("state", state);

  return {
    count: state,
  };
};

export default connect(mapStateToProps)(App);*/

export default App;
