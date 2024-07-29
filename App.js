
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate,Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';

import './Game.css';
import Game from './Game';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <div className="App">
        <Link to="/">Game</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
        <Routes>
          {/* <Route path="/" element={isLoggedIn ? <Navigate to="/TicTacToe" /> : <Login onLogin={handleLogin} />} />
          <Route path="/w" element={isLoggedIn ? <Game /> : <Navigate to="/" />} /> */}
        <Route path="/" element={<Game/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
