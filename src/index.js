import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import User from './components/User';
import Demo from './components/Demo';
import New1 from './components/New1';
import New2 from './components/New2';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <User/>
    <Demo/>
    <New1/>
    <New2/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
