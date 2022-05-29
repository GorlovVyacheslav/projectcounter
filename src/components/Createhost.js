import React from 'react';
import App from '../App';

const Createhost = (props) => {
    const { count } = props;
    return (
        <div>
            <h1> Host: {count}</h1>
            <h1>Key: {count}</h1>
            <input type="text" placeholder="host name"></input>
            <input type="text" placeholder="key(optional)"></input>

            <button>Create new host</button>
        </div>
    );
};

export default Createhost;
