import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ButtonGroup } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { makeStyles } from "@material-ui/core/styles";
import WeatherContext from "../context/context";

const useStyles = makeStyles(() => ({
  arrowButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "& svg": {
      height: "5rem",
      width: "5rem",
    },
  },
}));

const ArrowButtonGroup = () => {
  const classes = useStyles();

  const { selectedCardIndex, setSelectedCardIndex } = useContext(
    WeatherContext
  );

  const onArrowClick = (direction) => {
    let index;

    // eslint-disable-next-line no-unused-expressions
    direction === "left"
      ? (index = selectedCardIndex - 1)
      : (index = selectedCardIndex + 1);

    return setSelectedCardIndex(index);
  };

  const { length } = useSelector((store) => ({
    length: store.weather.length,
  }));

  return (
    <ButtonGroup
      className={classes.arrowButtonsContainer}
      size="large"
      aria-label="button group"
      fullWidth
      orientation="horizontal"
    >
      <IconButton
        onClick={() => onArrowClick("left")}
        color="primary"
        aria-label="left"
        disabled={selectedCardIndex <= 0}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={() => onArrowClick("right")}
        color="primary"
        aria-label="right"
        disabled={selectedCardIndex >= length - 1}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default ArrowButtonGroup;
