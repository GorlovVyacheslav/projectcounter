import React from 'react';
import { useState } from 'react';
import './MyCounter.css';

const MyCounter = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <input type="text" placeholder="Counter name"></input>
      <button>Create Counter with name</button>
      <button>add +1 to counter</button>
      <button>add -1 to counter</button>
      <button>set counter value</button>
    </div>
  );
};

export default MyCounter;
