import { useState, useEffect } from "react";
import getWeather from "./api";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import "./styles/main.css";

const App = function () {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null); // Declare a new state variable to store the weather data

  const capitalizeLocation = (location) => {
    const words = location.toLowerCase().split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  };

  const handleSubmit = async (term) => {
    // Call the getWeather function and specify a callback function to handle the resolved promise
    await getWeather(term).then((data) => {
      // Destructure the data from the resolved promise
      const { address, days, description, currentConditions } = data;
      console.log(address, days, description, currentConditions);
      const capitalizedLocation = capitalizeLocation(term);
      setLocation(capitalizedLocation);
      setWeatherData(data);
    });
  };

  const getIcon = (iconName) => {
    return require(`./icons/${iconName}.svg`);
  };

  return (
    <div className="container">
      <Search
        handleSubmit={handleSubmit}
        setLocation={setLocation}
        location={location}
      />
      <div className="flexy">
        {/* Pass the weatherData to the WeatherInfo component */}
        <WeatherInfo
          location={location}
          weatherData={weatherData}
          getIcon={getIcon}
        />
        <Forecast
          weatherData={weatherData}
          location={location}
          getIcon={getIcon}
        />
      </div>
    </div>
  );
};

export default App;
