import React, { useState, useEffect } from "react";
import "./weather.styles.css";
const weatherData = {
  iconUrl: "",
  cityName: "",
  temp: 0,
  feels_like: 0,
  temp_max: 0,
  temp_min: 0,
};
const Weather = () => {
  const [weather, setWeather] = useState(weatherData);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("Weather data not available");
          }
          return res.json();
        })
        .then((data) =>
          setWeather({
            iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            cityName: data.name,
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
          })
        );
    });
  }, []);
  const { iconUrl, cityName, temp, feels_like, temp_max, temp_min } = weather;
  return (
    <div className='weather-container'>
      <div className='weather-container-top'>
        <p className='weather-city'>{cityName}</p>
      </div>
      <div className='weather-container-middle'>
        <div className='weather-container-temp_max_min'>
          <p className='weather-temp_max'>
            HI <span>{Math.round(temp_max)}º</span>{" "}
          </p>
          <div className='line'></div>
          <p className='weather-temp_min'>
            LOW <span>{Math.round(temp_min)}º</span>
          </p>
        </div>
        <img src={iconUrl} alt='weatherIcon' />
        <p className='weather-temp'>{Math.round(temp)}º</p>
      </div>
      <div className='weather-container-bottom'>
        <p className='weather-feels_like-temp'>
          feels like {Math.round(feels_like)}º
        </p>
      </div>
    </div>
  );
};

export default Weather;
