import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Api from './components/Api';
import Get from './components/Get';
import Navbar from './components/Navbar';
import Third from './components/Third';

function App() {
  
  return (
    <div className="App">
      <div>
          <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/Api" exact element={<Api/>}></Route>
            <Route exact path="/Get" exact element={<Get/>}></Route>
            <Route exact path="/Third" exact element={<Third/>}></Route>
          </Routes>
          </Router>
          
      </div>
    </div>
  );
}

export default App;
