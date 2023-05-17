import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { increment, decrement } from "./redux/slices/counter";
import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <h1>Count is {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
