import { getUserCoordinates } from './geo.js';
import { NameCityWeather, fetchWeather } from './weather.js';
import "./loader.js";

document.addEventListener("DOMContentLoaded", () => {
    const weatherInfoDiv = document.getElementById("weather-info");

    // Obtém a localização do usuário e busca o clima
    getUserCoordinates((coords) => {
        if (!coords) {
            weatherInfoDiv.innerText = "Não foi possível obter sua localização.";
            return;
        }

        let { latitude, longitude } = coords;

        // Busca o clima
          fetchWeather(latitude, longitude, (weatherData) => {
            if (!weatherData) {
                weatherInfoDiv.innerText = "Não foi possível obter informações climáticas.";
                return;
            }

            // Exibe as informações climáticas na página
           let city = weatherData.name;
           let temperature = weatherData.main.temp;
           let humidity = weatherData.main.humidity;
           let description = weatherData.weather[0].description;

            document.getElementById("temperature").innerText = `Temperatura: ${temperature}°C`;
            document.getElementById("humidity").innerText = `Umidade: ${humidity}%`;
            document.getElementById("description").innerText = `Condição: ${description}`;

            // Atualiza o vídeo de fundo
            updateBackgroundVideo(weatherData.weather[0].main.toLowerCase(), );
        });
    });
});

// Função para atualizar o vídeo de fundo
export function updateBackgroundVideo(condition) {
    const videos = {
        cloudy: document.querySelector('.vd-cloudy'),
        sunny: document.querySelector('.vd-sunny'),
        rain: document.querySelector('.vd-rain'),
        storm: document.querySelector('.vd-storm'),
    };

    // Oculta todos os vídeos
    Object.values(videos).forEach(video => video.style.display = 'none');

    // Mostra o vídeo correspondente à condição climática
    if (condition.includes('cloud')) {
        videos.cloudy.style.display = 'block';
    } else if (condition.includes('sun')) {
        videos.sunny.style.display = 'block';
    } else if (condition.includes('rain')) {
        videos.rain.style.display = 'block';
    } else if (condition.includes('storm') || condition.includes('thunderstorm')) {
        videos.storm.style.display = 'block';
    } else {
        videos.sunny.style.display = 'block'; // Condição padrão
    }

}



