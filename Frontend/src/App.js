import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Login from './components/login'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Login/>
    </div>
  );
}

export default App;
