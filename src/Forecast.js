const Forcast = function ({ weatherData, location }) {
  return (
    <div className="forcastContainer">
      <div className="forcast-card">
        <h1>{location ? location : `I wonder what the weathers like in..`}</h1>
        <h1 className="temp">
          {weatherData ? weatherData.currentConditions.temp + "°C" : "°C"}
        </h1>

        <h2 className="feelslike">
          Feels like{" "}
          {weatherData ? weatherData.currentConditions.feelslike + "°C" : "..."}
        </h2>
        <p className="conditions">
          {weatherData ? [weatherData.currentConditions.conditions] : ""}
        </p>
      </div>
    </div>
  );
};

export default Forcast;
