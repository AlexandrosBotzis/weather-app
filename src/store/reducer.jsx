import {
  SET_WEATHER_START,
  SET_WEATHER_SUCCESS,
  SET_LOCATION,
  SET_FORECAST_LENGTH,
  SET_WEATHER_ERROR,
  SET_IS_LOADING,
} from "./types";
import initialState from "./state";

const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER_START:
      return state;
    case SET_WEATHER_SUCCESS:
      return {
        ...state,
        forecast: action.payload.forecast,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload.location,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case SET_FORECAST_LENGTH:
      return {
        ...state,
        length: action.payload.length,
      };
    case SET_WEATHER_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export default WeatherReducer;
