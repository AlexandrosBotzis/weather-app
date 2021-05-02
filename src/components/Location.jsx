import React from "react";
import { useSelector } from "react-redux";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Location = () => {
  const { location, isLoading } = useSelector((state) => ({
    location: state.weather.location,
    isLoading: state.weather.isLoading,
  }));

  const useStyles = makeStyles(() => ({
    card: {
      display: "flex",
      justifyContent: "center",
      padding: "0 1rem",
      marginBottom: "1rem",
      backgroundColor: "#6495ed",
      "& h3": {
        color: "#e6e6e6",
      },
    },
  }));

  const classes = useStyles();

  return (
    !isLoading && (
      <Card className={classes.card}>
        <h3>
          Weather in: {location && location.name},{" "}
          {location && location.country}
        </h3>
      </Card>
    )
  );
};

export default Location;
