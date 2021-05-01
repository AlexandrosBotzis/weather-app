import React, { useState } from "react";
import WeatherContext from "./context";

const WeatherProvider = ({ children }) => {
  const [isMetric, setIsMetric] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedCardIndex, setSelectedCardIndex] = useState(2);

  return (
    <WeatherContext.Provider
      value={{
        isMetric,
        setIsMetric,
        loading,
        setLoading,
        selectedCardIndex,
        setSelectedCardIndex,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
