const Forcast = function ({ weatherData, location, getIcon }) {
  const icon = weatherData ? getIcon(weatherData.currentConditions.icon) : null;
  return (
    <div className="forcastContainer">
      <div className="forcast-card">
        <div className="forcast-top">
          <div
            className="highs"
            style={{ display: weatherData ? "block" : "none" }}
          >
            <h4>High's</h4>
            <p>
              {weatherData ? Math.round(weatherData.days[0].tempmax) : ""}°C
            </p>
          </div>
          <h1
            className={weatherData ? "location--active" : ""}
            style={{ whiteSpace: "pre-line" }}
          >
            {location
              ? `${location} 
             Right now`
              : `I wonder what the weathers like in..`}
          </h1>
          <div
            className="highs"
            style={{ display: weatherData ? "block" : "none" }}
          >
            <h4>Low's</h4>
            <p>
              {weatherData ? Math.round(weatherData.days[0].tempmin) : ""}°C
            </p>
          </div>
        </div>

        <h1 className="temp">
          {weatherData ? weatherData.currentConditions.temp + "°C" : "°C"}
        </h1>

        <h2 className="feelslike">
          Feels like{" "}
          {weatherData ? weatherData.currentConditions.feelslike + "°C" : "..."}
        </h2>
        <img
          className="main-icon"
          style={{ display: weatherData ? "inline-block" : "none" }}
          src={icon}
          alt="weather icon"
        ></img>
        <p className="conditions">
          {weatherData ? [weatherData.currentConditions.conditions] : ""}
        </p>
      </div>
    </div>
  );
};

export default Forcast;
