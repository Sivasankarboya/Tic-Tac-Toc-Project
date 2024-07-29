import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Login from './Login';
import Game from './Game';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
