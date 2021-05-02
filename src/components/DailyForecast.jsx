import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import WeatherContext from "../context/context";
import { fetchWeatherFromApi, setIsLoading } from "../store/actions";
import { getTemperature } from "../utils/unitConversion";

const useStyles = makeStyles(() => ({
  weatherContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  weatherCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 1.6rem 1.6rem 1.6rem",
    border: "0.2rem solid",
    "@media (max-width: 425px)": {
      padding: "0 0.5rem 0.5rem 0.5rem",
      "&:not(:last-child)": {
        marginRight: "1.2rem",
      },
    },
  },
  title: {
    fontWeight: "400",
    fontSize: "1.4rem",
    marginBottom: "1rem",
    overflow: "auto",
    "@media (max-width: 425px)": {
      fontSize: "1rem",
    },
  },
  subtitle: {
    fontSize: "0.8rem",
    "@media (max-width: 425px)": {
      fontSize: "0.8rem",
    },
  },
  value: {
    fontWeight: "700",
    fontSize: "2rem",
    marginTop: "0",
  },
}));

const DailyForecast = () => {
  const { isMetric, selectedCardIndex } = useContext(WeatherContext);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (navigator.geolocation) {
      dispatch(setIsLoading({ isLoading: true }));
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

  const { forecast, length } = useSelector((state) => ({
    forecast: state.weather.forecast,
    length: state.weather.length,
  }));

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
      {forecast &&
        forecast.map(
          (value, idx) =>
            isVisible(idx) && (
              <Card
                className={classes.weatherCard}
                elevation={isSelected(idx) ? 8 : 4}
                style={{
                  borderColor: isSelected(idx) ? "#6495ed" : "#fff",
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
