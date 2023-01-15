import React from 'react'


const Navbar = () => {
    return (
        <div >
            <div className='navbar mb-2'>
                <h5 className='mx-auto' id='tituloprincipal'>App del Clima</h5>
            </div>
            <p className='mensaje mb-2'>
               <i className='lead'>Habilita la localización de tu navegador</i> 
            </p>
        </div>
    )
}

export default Navbar