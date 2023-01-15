import React from 'react'
import { useState, useEffect } from 'react'

const Buscador = () => {

    const[ciudad, setCiudad] = useState("");
    const[clima, setClima] = useState("");
    

    const ubicacionURL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&units=metric&appid=251643f089f7a4591111863c7f26cb76`

    const localizacion = () => {
        navigator.geolocation.getCurrentPosition(getUbicacionActual)
    }

    const getUbicacionActual = async (coordenadas) => {
        const {latitude, longitude} = coordenadas.coords;
        const fetchUbicacionActual = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=es&units=metric&appid=251643f089f7a4591111863c7f26cb76`)
        await fetchUbicacionActual.json()
        .then(data => {
            console.log(data)
        })
    }

    const getClimaInput = async () => {
        const fetchClimaInput = await fetch(ubicacionURL)
        await fetchClimaInput.json()
        .then (data => {
            console.log(data)
        })
    }

    useEffect(() => {
        getClimaInput();
    },[ciudad])

    const busquedaClimatica = (e) => {
        if (e.key === "Enter"){
            setCiudad(e.target.value)
        }
    }

    return (
        <div className='App'>
            <button onClick={localizacion}> Obtener Ubicacion</button>
            <input 
            type="text"
            className='form-control'
            onKeyDown={busquedaClimatica}
            />
        </div>

    )
}

export default Buscador