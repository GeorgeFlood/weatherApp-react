import moment from "moment";
const Forecast = function ({ weatherData, location, getIcon }) {
  const icon = weatherData ? getIcon(weatherData.currentConditions.icon) : null;

  const daysArray = weatherData ? weatherData.days[0].hours : [];

  const futureHours = daysArray
    .filter((hour) => moment(hour.datetime, "HH:mm:ss").isAfter(moment()))
    .slice(0, 6)
    .map((hour, index) => {
      return (
        <div key={index} className="hourly">
          <h4 className="hourly--time">{hour.datetime}</h4>
          <img
            src={getIcon(hour.icon)}
            alt="weather icon"
            className="hourly--img"
          />
          <h4 className="hourly--temp">{hour.temp}</h4>
        </div>
      );
    });

  console.log(futureHours);

  return (
    <div className="forcastContainer">
      <div className="forcast-card">
        <div className="forcast-top">
          <div
            className="highs"
            style={{ display: weatherData ? "block" : "none" }}
          >
            <h4>High's today</h4>
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
            <h4>Low's today</h4>
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

        <div className="miscellaneous">
          <div className="dateTime">
            <p>Last updated local time:</p>
            <p>
              {weatherData ? `${weatherData.currentConditions.datetime}` : ""}
            </p>
          </div>

          <p className="conditions">
            {weatherData ? [weatherData.currentConditions.conditions] : ""}
          </p>
          <div className="Precipitation">
            <p>Precipitation:</p>
            <p>
              {" "}
              {weatherData ? `${weatherData.currentConditions.precip}` : ""}
            </p>
          </div>
        </div>
        <div className="hourly--container">{futureHours}</div>
      </div>
    </div>
  );
};

export default Forecast;
