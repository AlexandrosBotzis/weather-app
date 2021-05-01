import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5";
const apiKey = "b4ba51d1cb7f483373fab3430dd14f6f";

const fetchWeatherData = ({ lat, long }) =>
  axios.get(`${baseUrl}/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`);

export default fetchWeatherData;
