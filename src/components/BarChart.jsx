import React, { useContext } from "react";
import { useSelector } from "react-redux";
import WeatherContext from "../context/context";
import { getTemperature } from "../utils/unitConversion";
import {
  Container,
  InnerContainer,
  BarChartContainer,
  Bar,
  Temperature,
  Label,
} from "./styled";

const BarChart = () => {
  const { isMetric, selectedCardIndex } = useContext(WeatherContext);

  const { weather } = useSelector((store) => ({
    weather: store.weather.weatherData,
  }));

  const daily =
    weather &&
    weather.length > 0 &&
    weather.find((item) => item.id === selectedCardIndex).threeHour;

  return (
    <Container>
      <InnerContainer>
        {daily &&
          daily.map((item) => (
            <BarChartContainer>
              <Temperature>
                {getTemperature(item.temp, isMetric, true)}
              </Temperature>
              <Bar height={getTemperature(item.temp, isMetric)} />
              <Label> {item.hour} </Label>
            </BarChartContainer>
          ))}
      </InnerContainer>
    </Container>
  );
};

export default BarChart;
