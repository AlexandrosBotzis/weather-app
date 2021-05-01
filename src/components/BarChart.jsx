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

  const { forecast } = useSelector((state) => ({
    forecast: state.weather.forecast,
  }));

  const daily =
    forecast &&
    forecast.length > 0 &&
    forecast.find((item) => item.id === selectedCardIndex).threeHour;

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
