import React, { useContext } from "react";
import { Box, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import WeatherContext from "../context/context";

const RadioButtonGroup = () => {
  const { isMetric, setIsMetric } = useContext(WeatherContext);
  const unit = isMetric ? "celcius" : "fahrenheit";

  return (
    <Box display="flex" justifyContent="center">
      <RadioGroup
        row
        className="radio"
        aria-label="unit"
        name="unit"
        value={unit}
        onChange={() => setIsMetric(!isMetric)}
      >
        <FormControlLabel
          value="fahrenheit"
          control={<Radio color="primary" />}
          label="Fahrenheit"
        />
        <FormControlLabel
          value="celcius"
          control={<Radio color="primary" />}
          label="Celcius"
        />
      </RadioGroup>
    </Box>
  );
};

export default RadioButtonGroup;
