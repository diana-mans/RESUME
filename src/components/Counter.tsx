import React from 'react';
import classes from './Counter.module.scss';

const Counter: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className={classes.counter}>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
};

export default Counter;
