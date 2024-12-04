import { updateBackgroundVideo } from "./main.js";
export function fetchWeather(lat, lon, callback) {
    const apiKey = "ddeb2c9ac851424c29569edce7c13860"; // Substitua pela sua API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`;
    const city = document.getElementById('city').value;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod !== 200) {
                console.error("Erro ao buscar clima:", data.message);
                callback(null);
                return;
            }

            callback(data);
        })
        .catch((error) => {
            console.error("Erro ao acessar o OpenWeather:", error);
            callback(null);
        });
}

 export function NameCityWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'ddeb2c9ac851424c29569edce7c13860'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Verifica se a resposta tem um código de erro (ex: cidade não encontrada)
            if (data.cod !== 200) {
                alert('Cidade não encontrada!');
                return;
            }

            updateBackgroundVideo(data.weather[0].main.toLowerCase(), );
            
            // Atualiza as informações na página
            document.getElementById('temperature').innerText = `Temperatura: ${data.main.temp}°C`;
            document.getElementById('humidity').innerText = `Umidade: ${data.main.humidity}%`;
            document.getElementById('description').innerText = `Condição: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Erro ao obter os dados:', error);
        });
}