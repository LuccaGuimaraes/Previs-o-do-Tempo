function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'e2d0a4776ba38a33985283722733ab11'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Verifica se a resposta tem um código de erro (ex: cidade não encontrada)
            if (data.cod !== 200) {
                alert('Cidade não encontrada!');
                return;
            }

            // Atualiza as informações na página
            document.getElementById('temperature').innerText = `Temperatura: ${data.main.temp}°C`;
            document.getElementById('humidity').innerText = `Umidade: ${data.main.humidity}%`;
            document.getElementById('description').innerText = `Condição: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Erro ao obter os dados:', error);
        });
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line', // Tipo do gráfico
    data: {
        labels: ['10:00', '14:00', '18:00', '22:00'], // Horários
        datasets: [{
            label: 'Temperatura',
            data: [22, 24, 19, 17], // Dados de temperatura para cada horário
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
