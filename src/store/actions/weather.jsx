import _ from "lodash";
import moment from "moment";
import "moment/locale/de";
import fetchWeatherData from "../../api/weather";
import { kelvinToFahrenheit } from "../../utils/unitConversion";
import {
  SET_WEATHER_START,
  SET_WEATHER_SUCCESS,
  SET_LOCATION,
  SET_WEATHER_ERROR,
  SET_FORECAST_LENGTH,
  SET_IS_LOADING,
} from "../types";

export const setWeatherStart = () => ({
  type: SET_WEATHER_START,
});

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});

export const setWeatherSuccess = (forecast) => ({
  type: SET_WEATHER_SUCCESS,
  payload: { forecast },
});

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: { location },
});

export const setForecastLength = (length) => ({
  type: SET_FORECAST_LENGTH,
  payload: { length },
});

export const setWeatherFail = (error) => ({
  type: SET_WEATHER_ERROR,
  payload: error,
});

const transformWeatherData = (res) => {
  const forecast = [];
  const averagePerDay = (array) =>
    array.map((val) => val.main.temp).reduce((p, c) => p + c, 0) / array.length;

  Object.keys(res).map((item, index) =>
    forecast.push({
      id: index,
      date: moment(item).locale("de").format("LL"),
      threeHour: res[item].map((threeHourTemp) => ({
        hour: moment(threeHourTemp.dt_txt).format("HH:mm"),
        temp: kelvinToFahrenheit(threeHourTemp.main.temp),
      })),
      average: kelvinToFahrenheit(averagePerDay(res[item])),
    })
  );

  return forecast;
};

export const fetchWeatherFromApi = ({ lat, long }) => (dispatch) => {
  dispatch(setWeatherStart());
  dispatch(setIsLoading({ isLoading: true }));
  // Promise.all([fetchWeatherData({ lat, long })])
  //   .then((res) => Promise.all([res.data]))
  fetchWeatherData({ lat, long })
    .then((res) => {
      console.log({ res });
      const { data } = res;
      const { city } = data;
      const groupedResults = _.groupBy(data.list, (result) =>
        moment(result.dt_txt).startOf("day").format("YYYY-MM-DD")
      );
      const forecast = transformWeatherData(groupedResults);
      dispatch(setWeatherSuccess(forecast));
      dispatch(setLocation(city));
      dispatch(setForecastLength(forecast.length));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setWeatherFail(err));
    })
    .finally(() => {
      dispatch(setIsLoading({ isLoading: false }));
    });
};

// Promise.all([fetchWeatherData(city), fetchExtendedForecastData(city)])
// .then((res) => {
//   return Promise.all([res[0].json(), res[1].json()]);
// })
// .then((res) => {
//   const { forecast, weather } = transformWeatherData(res);
//   dispatch(fetchWeatherSuccess(weather, forecast));
//   dispatch(setIsInitialState(false));
//   dispatch(setIsLoading(false));
// })
// .catch((err) => {
//   dispatch(fetchWeatherFail(err));
//   dispatch(setIsLoading(false));
// });
