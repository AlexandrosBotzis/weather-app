import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import WeatherContext from "../context/context";
import { fetchWeatherFromApi } from "../store/actions/weather";
import { getTemperature } from "../utils/unitConversion";
// import useFetchHook from "../Hooks/FetchHook";

const useStyles = makeStyles(() => ({
  weatherContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  weatherCard: {
    padding: "0 2rem 2rem 2rem",
    border: "2px solid blue",
  },
  title: {
    fontWeight: "400",
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: ".8rem",
  },
  value: {
    fontWeight: "700",
    fontSize: "1.2rem",
  },
}));

const DailyForecast = () => {
  const { isMetric, selectedCardIndex } = useContext(WeatherContext);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((data) => {
        dispatch(
          fetchWeatherFromApi({
            lat: data.coords.latitude,
            long: data.coords.longitude,
          })
        );
      });
    }
  }, [dispatch]);

  const { weather, length, isError } = useSelector((store) => ({
    weather: store.weather.weatherData,
    length: store.weather.length,
    isError: store.weather.isError,
  }));

  useEffect(() => {
    if (isError) {
      console.log("Cannot load weather for this place");
    }
  }, [isError]);

  const isSelected = (index) => index === selectedCardIndex;

  const isVisible = (idx) => {
    if (selectedCardIndex === 0) {
      return idx <= selectedCardIndex + 2;
    }

    if (selectedCardIndex === length - 1) {
      return idx >= selectedCardIndex - 2;
    }

    return (
      idx === selectedCardIndex ||
      idx === selectedCardIndex + 1 ||
      idx === selectedCardIndex - 1
    );
  };

  return (
    <Box className={classes.weatherContainer}>
      {weather &&
        weather.map(
          (value, idx) =>
            isVisible(idx) && (
              <Card
                className={classes.weatherCard}
                elevation={isSelected(idx) ? 8 : 4}
                style={{
                  borderColor: isSelected(idx) ? "lightblue" : "white",
                  opacity: isSelected(idx) ? "1" : "0.4",
                }}
              >
                <h6 className={classes.title}>{value.date}</h6>
                <p className={classes.subtitle}> Daily Average: </p>
                <p className={classes.value}>
                  {" "}
                  {getTemperature(value.average, isMetric, true)}{" "}
                </p>
              </Card>
            )
        )}
    </Box>
  );
};

export default DailyForecast;
