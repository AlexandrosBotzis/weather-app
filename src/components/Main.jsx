import React from "react";
import { Container, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import ArrowButtonGroup from "./ArrowButtonGroup";
import BarChart from "./BarChart";
import DailyForecast from "./DailyForecast";
import RadioGroup from "./RadioGroup";
import WeatherProvider from "../context/WeatherProvider";
import Location from "./Location";

const MainContent = () => {
  const { loading } = useSelector((store) => ({
    loading: store.weather.isLoading,
  }));
  
  return loading ? (
    <CircularProgress />
  ) : (
    <Container maxWidth="sm">
      <WeatherProvider>
        <RadioGroup />
        <ArrowButtonGroup />
        <Location />
        <DailyForecast />
        <BarChart />
      </WeatherProvider>
    </Container>
  );
};
export default MainContent;
