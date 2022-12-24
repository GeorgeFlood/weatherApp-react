const WeatherInfo = function ({ location, weatherData }) {
  const defaults = [1, 2, 3, 4, 5];

  let days;
  if (weatherData) {
    days = weatherData.days.slice(0, 5).map((day, index) => (
      <div key={index} className="info-col">
        <DaySVG />
        <h4>
          {day.tempmax}°C / {day.tempmin}°C
        </h4>
        <p>{day.datetime}</p>
      </div>
    ));
  } else {
    days = defaults.map((index) => (
      <div key={index} className="info-col">
        <h4>Highs°C / Lows°C</h4>
        <p>yr/day/mo</p>
      </div>
    ));
  }

  return (
    <div className="weatherInfoContainer">
      <div className="infoBox">
        <h2>{location ? `5 day forecast in ${location}` : "5 day forecast"}</h2>
      </div>
      {days}
    </div>
  );
};

const DaySVG = () => (
  <svg id="icone" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <title />
    <path
      d="M276.6,127.6A148.4,148.4,0,0,0,162.14,370.46,148.49,148.49,0,0,0,326.47,387a150.66,150.66,0,0,1-15.94-16.51,148.38,148.38,0,0,1,9.79-236.29A148.18,148.18,0,0,0,276.6,127.6Z"
      fill="#fff133"
    />
    <path
      d="M116.5,207c-.37,1.05-.73,2.11-1.07,3.17"
      fill="none"
      stroke="#02005c"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="20"
    />
    <path
      d="M109.77,234.43a148.43,148.43,0,0,0,221,150.11,148.44,148.44,0,0,1,0-257.08,148.46,148.46,0,0,0-204,56.62"
      fill="none"
      stroke="#02005c"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="20"
    />
  </svg>
);

export default WeatherInfo;
