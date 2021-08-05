import React from "react";
import { Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import "./style.css";

const About = () => {
  const cloud =
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-cloudBG.PNG";
  return (
    <React.Fragment>
      <div
        className="container flex-extend"
        style={{
          padding: 100,
          backgroundImage: "url(" + cloud + ")",
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          spacing={4}
        >
          <Grid item>
            <img
              className="roundedCorners1 shadow"
              style={{ maxHeight: 400, maxWidth: 300 }}
              src={
                "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Selfie_makingmagicmon.jpg"
              }
              alt="..."
            />
          </Grid>
          <Grid item>
            <img
              className="roundedCorners1 shadow"
              src={
                "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/HelloMyNameIsTexture.png"
              }
              style={{
                height: "auto",
                width: "auto",
                maxHeight: 300,
                maxWidth: 300,
              }}
            ></img>
          </Grid>
          <Grid item className="justify-content-center">
            <IconButton
              href="https://docs.google.com/document/d/e/2PACX-1vTccF0sdCp2sejlggEopteeLpWy_T7kfzbEQiw2abrbHtfqxLL2oJtjuJDI6dMzmep1pt4qWtdNcygY/pub"
              rel="noopener nofollow"
              target="_blank"
            >
              <img
                src={
                  "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/checkOutResume.png"
                }
                style={{ maxHeight: 200, maxWidth: 200 }}
              ></img>
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            =
            <img
              className="roundedCorners1 shadow zoom"
              src={
                "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/SkillsNewTexture.png"
              }
              style={{
                height: "auto",
                width: "auto",
                maxHeight: 300,
                maxWidth: 300,
              }}
            ></img>
          </Grid>
          <Grid item>
            <img
              className="roundedCorners1 shadow zoom"
              src={
                "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/AboutMeEditTex.png"
              }
              style={{ maxHeight: 300, maxWidth: 300 }}
            ></img>
          </Grid>
          <Grid item>
            <img
              className="roundedCorners1 shadow zoom"
              src={
                "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/ContactSP.png"
              }
              style={{ maxHeight: 300, maxWidth: 300 }}
            ></img>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item xs={6}></Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default About;
