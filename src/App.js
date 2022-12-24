import { useState } from "react";
import getWeather from "./api";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./styles/main.css";

const App = function () {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null); // Declare a new state variable to store the weather data

  const handleSubmit = async (term) => {
    // Call the getWeather function and specify a callback function to handle the resolved promise
    await getWeather(term).then((data) => {
      // Destructure the data from the resolved promise
      const { address, days, description, currentConditions } = data;
      console.log(address, days, description, currentConditions);
      setLocation(term);
      setWeatherData(data);
    });
  };

  console.log(location);

  return (
    <div className="container">
      <Search
        handleSubmit={handleSubmit}
        setLocation={setLocation}
        location={location}
      />
      <div className="flexy">
        {/* Pass the weatherData to the WeatherInfo component */}
        <WeatherInfo location={location} weatherData={weatherData} />
        <Forecast weatherData={weatherData} location={location} />
      </div>
    </div>
  );
};

export default App;
