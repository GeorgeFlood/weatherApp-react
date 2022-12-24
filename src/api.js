import axios from "axios";

const API_KEY = "VXLDAALGHC7WB6FT22D3V9JM7";

const getWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json
      `
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getWeather;
