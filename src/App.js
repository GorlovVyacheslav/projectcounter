import './App.css';
import { CounterLayout } from './layouts/CounterLayout';
import { HostLayout } from './layouts/HostLayout';
import { ListOfCountersLayout } from './layouts/ListOfCountersLayout';
import MyCounter from './MyCounter';
import { ListOfCounters } from './components/ListOfCounters';
import React from 'react';
import Createhost from './components/Createhost';

function App() {
    return (
        <div className="App">
            <div className="layouts__wrapper">
                <ListOfCountersLayout>
                    <ListOfCounters />
                </ListOfCountersLayout>
                <CounterLayout>
                    <MyCounter />
                </CounterLayout>
                <HostLayout>
                    <Createhost />
                </HostLayout>
            </div>
        </div>
    );
}

export default App;
