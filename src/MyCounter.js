import React from "react";
import { useState } from "react";
import "./MyCounter.css";
import { counterApi } from "./api/counter.api";

const MyCounter = () => {
  let [count, setCount] = useState(0);

  const increment = async () => {
    const data = await counterApi.increment();
    setCount((count) => data.value);
  };

  const decrement = async () => {
    const data = await counterApi.decrement();
    setCount((count) => data.value);
  };
  const reset = () => {
    setCount(0)
  };

  return (
    <div>
      <h1>Value: {count}</h1>
      <input type="text" placeholder="Counter name"></input>
      <button>Create Counter with name</button>
      <button onClick={increment}>add +1 to counter</button>
      <button onClick={decrement}>add -1 to counter</button>
      <button onClick={reset}>set counter value</button>
    </div>
  );
};

export default MyCounter;