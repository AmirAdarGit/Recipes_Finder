//import './App.css';
import About from './pages/About'
import Home from './pages/Home'
import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path ='/' exact component={Home}></Route>
      <Route path ='/about' exact component={About}></Route>
    </Router>
  );
}

export default App;
