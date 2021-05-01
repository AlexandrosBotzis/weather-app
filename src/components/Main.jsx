import React from "react";
import { Container } from "@material-ui/core";
import ArrowButtonGroup from "./ArrowButtonGroup";
import BarChart from "./BarChart";
import DailyForecast from "./DailyForecast";
import RadioGroup from "./RadioGroup";
import WeatherProvider from "../context/WeatherProvider";
import Location from "./Location";

const MainContent = () => (
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
export default MainContent;
