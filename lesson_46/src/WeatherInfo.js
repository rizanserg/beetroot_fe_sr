import React, { useState } from 'react';
import Button from '@mui/material/Button';

function WeatherInfo({ data }) {
  const [threeDayForecast, setThreeDayForecast] = useState(null);

  const fetchThreeDayForecast = async () => {
    const apiKey = '99bb5d321d4f3386cc5c44d81f3a96d5';

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${data?.name}&units=metric&appid=${apiKey}`
      );
      const forecast = await response.json();

      const threeDayForecastData = forecast.list.slice(0, 8 * 3);

      setThreeDayForecast(threeDayForecastData);
    } catch (error) {
      console.error('Помилка при отриманні трьохденного прогнозу погоди:', error);
      setThreeDayForecast(null);
    }
  };

  return (
    <div className="weather-info">
      {data && (
        <>
          <div>
            <h2 className="city">{data.name}</h2>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
            <h2>{data.weather[0].description}</h2>
            <h3 className="temp">{data.main.temp.toFixed()}°C</h3>
          </div>

          <div className="box_container">
            <div className="box">
              <p>Wind: {data.wind.speed.toFixed()} km/h</p>
              <h1></h1>
            </div>

            <div className="box">
              <p>Feels Like: {data.main.feels_like.toFixed()} °C</p>
              <h1></h1>
            </div>

            <div className="box">
              <p>Humidity: {data.main.humidity}%</p>
              <h1></h1>
            </div>
          </div>
        </>
      )}
      <Button variant="outlined" color="inherit" size="large" onClick={fetchThreeDayForecast}>
        Three Day
      </Button>
      {threeDayForecast && (
        <div className="three-day-forecast">
          <h3 className="three-day-title">Three Day Weather:</h3>
          <ul className="table">
            {threeDayForecast
              .filter((item, index) => index % 8 === 0)
              .map((forecast, index) => (
                <tr key={index}>
                  <td className="table-col">{forecast.dt_txt}</td>
                  <td>
                    <img
                      src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                      alt=""
                    />
                  </td>
                  <td>{forecast.main.temp}°C</td>
                </tr>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WeatherInfo;
