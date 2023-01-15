import React from 'react'
import { useState, useEffect } from 'react'

const Buscador = () => {

    const [ciudad, setCiudad] = useState("");
    const [clima, setClima] = useState("");


    const ubicacionURL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&units=metric&appid=251643f089f7a4591111863c7f26cb76`

    const localizacion = () => {
        navigator.geolocation.getCurrentPosition(getUbicacionActual)
    }

    const getUbicacionActual = async (coordenadas) => {
        const { latitude, longitude } = coordenadas.coords;
        const fetchUbicacionActual = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=es&units=metric&appid=251643f089f7a4591111863c7f26cb76`)
        await fetchUbicacionActual.json()
            .then(data => {
                setClima(data)
                console.log(data)
            })
    }

    const getClimaInput = async () => {
        const fetchClimaInput = await fetch(ubicacionURL)
        await fetchClimaInput.json()
        .then(data => {
            if (data.cod > 399) {
              setClima(false) //Si existe un error al hacer el request, no se le asignaran los valores
              return;
            }
            else {
              setClima(data)
            }
          })
    }

    useEffect(() => {
        getClimaInput();
    }, [ciudad])

    const busquedaClimatica = (e) => {
        if (e.key === "Enter") {
            setCiudad(e.target.value)
        }
    }

    return (
        <div className='App'>
            <div className='input mb-3 mx auto'>
                <input
                    type="text"
                    className='form-control'
                    onKeyDown={busquedaClimatica}
                />
                <button onClick={localizacion}> Obtener Ubicacion</button>
            </div>
            {(clima) ? (
                <div className='container d-flex justify-content-center'>
                    <div className='card mx-auto mb-2'>
                        <h3 className="nombreciudad">{clima.name}</h3>
                        <h1 className="temperatura">{clima.main.temp.toFixed(0)} &deg;</h1>
                        <p className='descripcion'>{clima.weather[0].description}</p>
                        <p className="card-text">Temp. máxima: {(clima.main.temp_max)}&deg;</p>
                        <p className="card-text">Temp. mínima: {(clima.main.temp_min)}&deg;</p>
                        <p className="card-text">Sensación térmica: {(clima.main.feels_like)}&deg;</p>
                        <p className="card-text">Humedad: {clima.main.humidity}%</p>
                    </div>
                </div>
            ) : (
                <h3>No has introducido nada</h3>
            )
            }
        </div>

    )
}

export default Buscador