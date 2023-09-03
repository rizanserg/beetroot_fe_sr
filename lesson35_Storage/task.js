const apiKey = '99bb5d321d4f3386cc5c44d81f3a96d5';
const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

// Функція для отримання прогнозу погоди з OpenWeather API
async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Помилка при отриманні погоди:', error);
        return null;
    }
}

// Функція для оновлення інформації про погоду
function updateWeatherInfo(city, weatherData) {
    if (weatherData) {
        const temperature = (weatherData.main.temp - 273.15).toFixed(2); // Конвертуємо температуру в градуси Цельсія
        const description = weatherData.weather[0].description;

        const weatherText = `Погода в місті ${city}: ${temperature}°C, ${description}`;
        weatherInfo.textContent = weatherText;

        // Збереження результату у localStorage
        const currentTime = new Date().getTime();
        localStorage.setItem('weatherData', JSON.stringify({ city, weatherData, timestamp: currentTime }));
    } else {
        weatherInfo.textContent = 'Погоду не знайдено.';
    }
}

// Обробник події відправки форми
weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value;

    // Перевірка часу останнього запиту в localStorage
    const storedData = localStorage.getItem('weatherData');
    if (storedData) {
        const { timestamp } = JSON.parse(storedData);
        const currentTime = new Date().getTime();
        const timeDiff = (currentTime - timestamp) / (1000 * 60 * 60); // Різниця в годинах
        if (timeDiff < 2) {
            // Виведення з localStorage, якщо не минуло 2 години
            const { city, weatherData } = JSON.parse(storedData);
            updateWeatherInfo(city, weatherData);
            return;
        }
    }

    const weatherData = await getWeather(city);
    updateWeatherInfo(city, weatherData);
});
