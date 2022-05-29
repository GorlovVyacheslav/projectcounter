import './App.css';
import { CounterLayout } from './layouts/CounterLayout';
import { HostLayout } from './layouts/HostLayout';
import { ListOfCountersLayout } from './layouts/ListOfCountersLayout';
import MyCounter from './MyCounter';
import { ListOfCounters } from './components/ListOfCounters';
import React from 'react';
import Createhost from './components/Createhost';
import { useState } from 'react';

function App() {
  
  let [count, setCount] = useState(0);
  const increment = () => {
    (setCount(count + 1));
 
  };

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  };
  

  
    return (
        <div className="App">
        <div className="layouts__wrapper">
                         <ListOfCountersLayout>
                    <ListOfCounters />
                </ListOfCountersLayout>
                <CounterLayout>
            <MyCounter
             count={count}
            increment={increment}
            decrement={decrement}
              reset={reset}
            />
            </CounterLayout>
                <HostLayout>
                    <Createhost />
                </HostLayout>
            </div>
        </div>
    );
}

export default App;
