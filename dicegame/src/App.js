import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home.js'
import DiceGame1 from './Pages/DiceGame1.js'
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/dicegame1' element={<DiceGame1 />}/>
    </Routes>
    </Router>
  );
}

export default App;
