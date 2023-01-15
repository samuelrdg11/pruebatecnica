const Images = (imagenes) => {
    switch (imagenes) {
        case 'Thunderstorm':
            imagenes = 'imagenclima/thunderstorm.jpg'
            break;
        case 'Drizzle':
            imagenes = 'imagenclima/Drizzle.jpg'
            break;
        case 'Rain':
            imagenes = 'imagenclima/Lluvia.jpg'
            break;
        case 'Snow':
            imagenes = 'imagenclima/Snow.jpg'
            break;
        case 'Clear':
            imagenes = 'imagenclima/ClearSky.jpg'
            break;
        case 'Clouds':
            imagenes = 'imagenclima/FewClouds.jpg'
            break;
        case 'Overcast clouds':
            imagenes = 'imagenclima/Overcastcloud.jpg'
            break;
        case 'Shower rain':
            imagenes = 'imagenclima/ShowerRain.jpg'
            break;
        case 'Mist':
            imagenes = 'imagenclima/Mist.jpg'
            break;
        case 'Fog':
            imagenes = 'imagenclima/Mist.jpg'
            break;
        case 'Haze':
            imagenes = 'imagenclima/Mist.jpg'
            break;
        case 'Smoke':
            imagenes = 'imagenclima/Mist.jpg'
            break;
        default:
    }
    return imagenes;
}
export default Images