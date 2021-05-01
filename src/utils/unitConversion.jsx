export const kelvinToFahrenheit = (num) =>
  Math.round((9 / 5) * (num - 273) + 32);

export const getTemperature = (temperature, isMetric, symbol) => {
  const convertToCelcius = (temperatureInF) => (temperatureInF - 32) * (5 / 9);

  return isMetric
    ? `${Math.round(convertToCelcius(temperature))}${symbol ? "\xB0C" : ""}`
    : `${Math.round(temperature)}${symbol ? "\xB0F" : ""}`;
};
