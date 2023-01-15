import './App.css';
import React from 'react';
import Buscador from './Components/Buscador';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Buscador />
    </div>
  );
}

export default App;
