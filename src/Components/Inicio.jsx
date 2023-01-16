import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div >
      <Navbar />
      <div className='funciones'>
        <h5 className='mb-3'>Esta aplicación tiene las siguientes funciones:</h5>
        <p className='funcion mb-2'>Detecta tu ubicación y te enseña los datos climaticos del mismo.</p>
        <p className='funcion mb-2'>Asimismo, puedes cambiar la ubicación a tu gusto.</p>
        <p className='funcion mb-2'>Además, te enseñará una imagen de acuerdo al clima actual.</p>
        <Link to="/Buscar" className="btn btn-outline btn-sm mx-1" id='boton'>Ver el clima</Link>
      </div>
    </div>
  )
}

export default Inicio