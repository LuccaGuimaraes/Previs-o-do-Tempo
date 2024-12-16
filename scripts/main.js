import { getUserCoordinates } from './geo.js';
import { NameCityWeather, fetchWeather } from './weather.js';
import "./loader.js";

document.addEventListener("DOMContentLoaded", () => {
    const weatherInfoDiv = document.getElementById("weather-info");

    // Obtém a localização do usuário e busca o clima
    getUserCoordinates((coords) => {
        console.log(coords);
        
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
            
            document.getElementById("city-name").innerHTML = `${city}`;
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
//animaçao do h1 "Bem-vindo ao SkyCheck"
const Text = "Bem-vindo ao SkyCheck!";
const writerAnimation = document.getElementById("writerAnimation");
let index = 0;
let isDeleting = false; // Indica se está apagando o texto

function type() {
    if (!isDeleting && index < Text.length) {
        writerAnimation.innerHTML += Text.charAt(index); // Adiciona o caractere
        index++;
        setTimeout(type, 100); // Velocidade de escrita
    } else if (isDeleting && index > 0) {
        writerAnimation.innerHTML = Text.substring(0, index - 1); // Remove o caractere
        index--;
        setTimeout(type, 50); // Velocidade de apagamento
    } else {
        isDeleting = !isDeleting; // Alterna entre escrever/apagar
        setTimeout(type, 1000); // Pausa antes de alternar
    }
}

type();
document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city"); // Campo de entrada
    const searchButton = document.getElementById("NameCityBtn"); // Botão de busca
    const cityNameDisplay = document.getElementById("city-name"); // Elemento onde o nome da cidade será exibido

    // Função que executa quando o botão de busca é clicado
    searchButton.addEventListener("click", () => {
        const cityName = cityInput.value.trim(); // Pega o valor do input

        if (cityName === "") {
            cityNameDisplay.innerText = "Por favor, insira o nome de uma cidade."; // Mensagem caso o input esteja vazio
        } else {
            cityNameDisplay.innerText = cityName; // Atualiza o nome da cidade no elemento <p>
        }
    });
});
