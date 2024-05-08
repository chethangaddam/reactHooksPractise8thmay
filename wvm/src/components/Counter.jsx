import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(1);

  function incrimentCount() {
    setCount(count + factor);
  }
  function decrementCount() {
    setCount(count - factor);
  }

  function incrimentFactor() {
    setFactor(factor + 1);
  }
  function decrementFactor() {
    setFactor(factor - 1);
  }


  return (
    <div>
      <h1> The count is: {count}</h1>
      <button onClick={incrimentCount}>Click to Increment</button>
      <button onClick={decrementCount}>Click to Drecement</button>
        <h1>Set Factor: {factor}</h1>
      <button onClick={incrimentFactor}>Click to Increment</button>
      <button onClick={decrementFactor}>Click to Drecement</button>
    </div>
  );
};

export default Counter;
