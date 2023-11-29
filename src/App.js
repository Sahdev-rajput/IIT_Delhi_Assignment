import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import AllRoutes from './AllRoutes';
import React from "react"

function App() {
  return (
    <div className="App" id="vanta">
    <Router>
      <AllRoutes />
    </Router>
  </div>
  );
}

export default App;
