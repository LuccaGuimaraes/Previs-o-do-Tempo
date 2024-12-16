export function getUserCoordinates(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log("Posição obtida:", position); // Log para depuração
                callback({ latitude, longitude });
            },
            (error) => {
                console.error("Erro ao obter localização:", error.message);
                callback(null); // Chama o callback com null em caso de erro
            },
            {
                enableHighAccuracy: true, // Solicita a maior precisão possível
                timeout: 10000, // Tempo máximo para obter a localização (10s)
                maximumAge: 0 // Não usa dados antigos em cache
            }
        );
    } else {
        console.error("Geolocalização não é suportada neste navegador.");
        callback(null);
    }
}