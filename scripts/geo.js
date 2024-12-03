export function getUserCoordinates(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                callback({ latitude, longitude });
            },
            (error) => {
                console.error("Erro ao obter localização:", error.message);
                callback(null);
            }
        );
    } else {
        console.error("Geolocalização não é suportada neste navegador.");
        callback(null);
    }
}
