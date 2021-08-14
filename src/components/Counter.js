import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, increase } from '../features/counter/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment())
  }
  const increaseBy10 = () => {
    dispatch(increase(10));
  } 
  const decrementCounter = () => {
    dispatch(decrement())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={increaseBy10}>Increase by 10</button>
      </div>
    </main>
  );
};

export default Counter;
