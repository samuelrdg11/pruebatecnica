import './App.css';
import React from 'react';
import Buscador from './Components/Buscador';
import Inicio from './Components/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Buscar' element={<Buscador />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
