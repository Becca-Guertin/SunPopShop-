import React from "react";
import { Grid } from "@material-ui/core";
import CommishTemp from "./CommishTemp";

import "./style.css";

const Commissions = () => {
  const commissions = {
    commish: [
      {
        id: 1,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/clownCS.jpg",
        title: "Crime Spree in Candyland: The Grand Design, 2020",
      },
      {
        id: 2,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/fallingCS.jpg",
        title: "Crime Spree in Candyland: The Grand Design, 2020",
      },
      {
        id: 3,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/hauntmeCS.jpg",
        title: "Crime Spree in Candyland: The Grand Design, 2020",
      },
      {
        id: 4,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/iguessitsokCS.jpg",
        title: "Crime Spree in Candyland: The Grand Design, 2020",
      },
      {
        id: 5,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/thistimeurrightCS.jpg",
        title: "Crime Spree in Candyland: The Grand Design, 2020",
      },
      {
        id: 6,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/unwindCS.jpg",
        title: "Crime Spree in Candyland: The Grand Design, 2020",
      },
      {
        id: 7,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Tiff%26mike_2_wbkgdColor2.jpg",
        title: "Custom Couple Portrait, 2020",
      },

      {
        id: 8,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Tiff%26mike_2_B%26Winverse.png",
        title: "Custom Couple Portrait, 2020",
      },
      {
        id: 10,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-atty2.png",
        title: "Custom Pup Portrait, 2021",
      },
    ],

    background:
      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/uprightFramedBG.JPG",
  };

  const mapCommissions = (commission) => {
    return (
      <CommishTemp
        key={`FruitBabes-${commission.id}`}
        commission={commission}
        imageUrl={commissions.commish.imageUrl}
        title={commissions.commish.title}
      />
    );
  };

  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          padding: 50,
          backgroundImage: "url(" + commissions.background + ")",
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          spacing={2}
        >
          <Grid item className="justify-content-flex-start"></Grid>

          {commissions.commish.map(mapCommissions)}
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Commissions;
