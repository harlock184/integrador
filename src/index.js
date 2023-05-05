// import React from 'react';
// // import ReactDOM from 'react-dom';
// import './index.css';
// import App from "./App";
// import {createRoot} from "react-router-dom"

// ReactDOM. createRoot(
//    <React.StrictMode>
//       <App />
//    </React.StrictMode>,
//    document.getElementById('root')
// );
import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);