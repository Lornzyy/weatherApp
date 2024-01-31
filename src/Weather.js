import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weatherCondition, setWeatherCondition] = useState({});

  function showTemperature(response) {
    // console.log(response);

    if (
      response.data.message === "City not found" ||
      response.data.city === ""
    ) {
      setWeatherCondition({
        message: response.data.message,
      });
    } else {
      setWeatherCondition({
        city: response.data.city,
        temperature: response.data.temperature.current,
        country: response.data.country,
        description: response.data.condition.description,
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity,
        icon: response.data.condition.icon_url,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let apiKey = "o63c6afa36060dtb755bc2adb841329a";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  if (!weatherCondition.message) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input
            type="button"
            value="Search"
            className="btn"
            onClick={handleSubmit}
          />
        </form>

        <p>
          Weather in{" "}
          <strong>
            {weatherCondition.city} {weatherCondition.country}
          </strong>
        </p>

        <p>
          {" "}
          Temperature is{" "}
          <strong>
            {weatherCondition.city
              ? Math.round(weatherCondition.temperature)
              : 0}
            °C
          </strong>
        </p>
        <p>
          Description:<strong>{weatherCondition.description}</strong>
        </p>
        <p>
          Humidity:<strong> {weatherCondition.humidity}%</strong>
        </p>
        <p>
          Wind: <strong> {weatherCondition.wind}km/h</strong>
        </p>
        <img src={weatherCondition.icon} alt="Weather Icon" />
      </>
    );
  }else {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input
            type="button"
            value="Search"
            className="btn"
            onClick={handleSubmit}
          />
        </form>
        <h3 className="text">
          {weatherCondition.message}
          <br />
          <strong className="text"> Please enter a valid city</strong>
        </h3>
      </>
    );
  }
}
