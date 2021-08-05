import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid } from "@material-ui/core";
import "./style.css";

const AlienBabeTemp = (props) => {
  return (
    <Grid item>
      <img
        style={{
          height: "auto",
          width: "auto",
          maxHeight: 475,
          maxWidth: 290,
          marginBottom: 30,
        }}
        src={props.babe.imageUrl}
        className="roundCorners shadow zoom"
        alt="..."
      ></img>
      <h3 style={{ fontFamily: "Brush Script MT" }} className="text-black"></h3>
    </Grid>
  );
};

AlienBabeTemp.propTypes = {
  babe: PropTypes.shape({
    imageUrl: PropTypes,
    title: PropTypes.string,
  }),
};

export default AlienBabeTemp;
