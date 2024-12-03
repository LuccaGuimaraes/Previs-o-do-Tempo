export function fetchWeather(lat, lon, callback) {
    const apiKey = "ddeb2c9ac851424c29569edce7c13860"; // Substitua pela sua API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`;

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
