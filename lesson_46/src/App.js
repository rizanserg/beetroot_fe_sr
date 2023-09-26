import React, { useState } from 'react';
import './assets/css/index.css';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    const apiKey = '99bb5d321d4f3386cc5c44d81f3a96d5';

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Помилка при отриманні даних про погоду:', error);
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <h1>WEATHER</h1>
      <WeatherForm onSearch={fetchWeatherData} />
      <WeatherInfo data={weatherData} />
    </div>
  );
}

export default App;
