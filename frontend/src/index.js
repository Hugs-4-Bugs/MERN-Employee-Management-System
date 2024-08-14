// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App'; // Updated import path
// import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css'; // Your global styles
// import './App.css';

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Correct path to App.js

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
