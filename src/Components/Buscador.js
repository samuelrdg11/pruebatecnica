import React from 'react'

const Buscador = () => {

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
    return (
        <div>
            <button onClick={localizacion}> Obtener Ubicacion</button>
        </div>
    )
}

export default Buscador