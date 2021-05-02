import axios from "axios";

const fetchWeatherData = ({ lat, long }) =>
  axios.get(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`);

export default fetchWeatherData;
