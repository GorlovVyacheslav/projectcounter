import React from 'react';
import { useState } from 'react';

const Createhost = () => {
    return (
        <div>
            <h1> Host: {useState}</h1>
            <h1>Key: {useState}</h1>
            <input type="text" placeholder="host name"></input>
            <input type="text" placeholder="key(optional)"></input>

            <button>Create new host</button>
        </div>
    );
};

export default Createhost;
