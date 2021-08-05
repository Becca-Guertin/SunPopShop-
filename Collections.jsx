import React from "react";
import { Grid } from "@material-ui/core";
import "./style.css";

import sunpopFlower from "../assets/images/Image from iOS (1).png";
const Collections = () => {
  const background =
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/pink.png";
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          paddingTop: 60,
          backgroundColor: "#FFC0CB",
        }}
      >
        <Grid item xs={4}></Grid>
        <Grid
          item={6}
          style={{
            fontFamily: "Brush Script MT",
            color: "white",
            fontSize: 60,
            paddingBottom: 40,
            marginLeft: 150,
          }}
        >
          Collections
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <div
        className="container"
        style={{
          padding: 60,
          marginTop: 20,
          backgroundImage: "url(" + background + ")",
        }}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={6}
        >
          <Grid item>
            <img src={sunpopFlower} style={{ maxHeight: 200, maxWidth: 200 }} />
          </Grid>
          <Grid item>
            <card>
              <a href="/collections/commissions" className="btn">
                <div className="box">
                  <img
                    src={
                      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/commissionsCol.png"
                    }
                    alt="commissions"
                    className="image"
                    style={{ maxHeight: 300, maxWidth: 300 }}
                  ></img>
                  <div className="middle"></div>
                </div>
              </a>
            </card>
          </Grid>
          <Grid item>
            <card>
              <a href="/collections/fruityBabes" className="btn btn-danger">
                <div className="box">
                  <img
                    src={
                      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/collectionsFruitBabes.png"
                    }
                    className="image"
                    alt="Fruity Babes"
                    style={{ maxHeight: 300, maxWidth: 300 }}
                  ></img>
                  <div className="middle"></div>
                </div>
              </a>
            </card>
          </Grid>
          <Grid item>
            <card>
              <a href="/collections/otherIllos" className="btn btn-warning">
                <div className="box">
                  <img
                    src={
                      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/collectionsOther.png"
                    }
                    className="image"
                    style={{ maxHeight: 300, maxWidth: 300 }}
                  ></img>
                  <div className="middle"></div>
                </div>
              </a>
            </card>
            <div className="hero-footer py-lg-5" />
          </Grid>
          <Grid item>
            <img src={sunpopFlower} style={{ maxHeight: 200, maxWidth: 200 }} />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Collections;
