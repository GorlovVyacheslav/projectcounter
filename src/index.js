import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyCounter from './MyCounter';
import HostBlock from './HostBlock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MyCounter />
    <HostBlock/>

  </React.StrictMode>
);

