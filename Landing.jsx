import React, { useState } from "react";
import Modal1 from "../components/Modals/Modal1.jsx";
import Modal5 from "../components/Modals/Modal5";
import Modal6 from "../components/Modals/Modal6";
import LandingFruitTemplate from "../components/LandingFruitTemplate";
import { Grid } from "@material-ui/core";
import flowerLogo2 from "../assets/images/Image from iOS (15).png";
import sunpopFlower from "../assets/images/Image from iOS (1).png";
import heart2 from "../assets/images/Image from iOS (heart2).png";
import ImageSlider from "../components/ImageSlider";
import FeaturedLandSlide from "../components/FeaturedLandSlide";
import "./style.css";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [currentFruityFriend, setCurrentFruityFriend] = useState();

  const fruityBabes = {
    babes: [
      {
        id: 1,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/fruit/watermelon.png",
      },

      {
        id: 2,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/blueBerryGirl.jpg",
      },
      {
        id: 3,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/fruit/kiwi.png",
      },

      {
        id: 4,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/fruit/orange.png",
      },
    ],
    pink: "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/pink.png",
    stripes:
      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/stripes.png",
    featuredFont:
      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/FeaturedColorText2Crop.png",
  };

  const mapFruitBabes = (babe) => {
    return (
      <LandingFruitTemplate
        key={`FruitBabes-${babe.id}`}
        babe={babe}
        handleClick={handleClick}
        imageUrl={fruityBabes.babes.imageUrl}
      />
    );
  };

  const handleClick = (e, res) => {
    console.log(e, res);
    let babe = e.imageUrl;
    setIsModalOpen(true);
    setCurrentFruityFriend(babe);
  };

  const handleClick3 = () => {
    setIsModalOpen3(true);
  };

  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          padding: 100,
          backgroundImage: "url(" + fruityBabes.pink + ")",
        }}
      >
        <Grid
          container
          direction="row"
          spacing={6}
          justify="center"
          alignItems="center"
        >
          <Grid item={2}>
            <img src={heart2} style={{ maxHeight: 100, maxWidth: 100 }} />
          </Grid>
          <Grid item={4}>
            <img src={flowerLogo2} style={{ maxHeight: 300, maxWidth: 300 }} />
          </Grid>
          <Grid item={2}>
            <img src={heart2} style={{ maxHeight: 100, maxWidth: 100 }} />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="row"
          spacing={4}
        >
          <Grid item></Grid>
          <Grid item>
            <img
              className="shadow roundCorners1 zoom"
              src={
                "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Bending+backwards_NoBckg2.jpg"
              }
              style={{ maxWidth: 300, maxHeight: 500 }}
            />
          </Grid>
          <Grid item className="justify-content-flex-end">
            <div className="box">
              <img
                className=" shadow roundCorners1 zoom"
                style={{ maxWidth: 350, maxHeight: 550 }}
                src={
                  "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/SunPopShop+logo.png"
                }
              ></img>
            </div>
          </Grid>
          <Grid item>
            <img
              src={
                "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/SunpopShapesNPeople.PNG"
              }
              style={{ maxWidth: 300, maxHeight: 500 }}
              className="shadow roundCorners1 zoom"
            />
          </Grid>
          <Grid item></Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={4}
            style={{ padding: 20, marginTop: 20 }}
          >
            <Grid item>
              <img
                src={fruityBabes.featuredFont}
                style={{ maxHeight: 285, maxWidth: 385 }}
              ></img>
            </Grid>
            <Grid item>
              <FeaturedLandSlide />
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={2}
            style={{ padding: 40 }}
          >
            <Grid item>
              <img
                src={sunpopFlower}
                style={{ maxHeight: 150, maxWidth: 150, boxShadow: "inherit" }}
              />
            </Grid>
            <Modal1
              open={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              initialValue={currentFruityFriend}
            />

            {fruityBabes.babes.map(mapFruitBabes)}

            <Modal5 open={isModalOpen2} setIsModalOpen={setIsModalOpen2} />
            <Modal6 open={isModalOpen3} setIsModalOpen={setIsModalOpen3} />
            <Grid item>
              <img
                src={sunpopFlower}
                style={{ maxHeight: 150, maxWidth: 150, boxShadow: "inherit" }}
              />
            </Grid>
          </Grid>

          <Grid container justify="center">
            <ImageSlider />
          </Grid>

          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              spacing={6}
            >
              <Grid
                container
                className="shadow"
                style={{
                  backgroundImage: "url(" + fruityBabes.stripes + ")",
                  padding: 80,
                }}
              >
                <Grid item>
                  <img
                    className="shadow roundCorners zoom"
                    src={
                      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-alienSoulSister.PNG"
                    }
                    style={{
                      marginTop: 30,
                      marginLeft: 20,
                      height: "auto",
                      width: "auto",
                      maxHeight: 370,
                      maxWidth: 370,
                    }}
                  ></img>
                </Grid>

                <Grid item>
                  <div className="box">
                    <img
                      onClick={handleClick3}
                      className="image btn shadow roundCorners"
                      src={
                        "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/girls/blueBerry2.PNG"
                      }
                      style={{
                        marginTop: 30,
                        marginLeft: 20,
                        height: "auto",
                        width: "auto",
                        maxHeight: 370,
                        maxWidth: 370,
                      }}
                    />
                    <div className="middle"></div>
                  </div>
                </Grid>
                <Grid item>
                  <img
                    className="shadow roundCorners zoom"
                    src={
                      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/girls/strawberry2.PNG"
                    }
                    style={{
                      marginTop: 30,
                      marginLeft: 20,
                      height: "auto",
                      width: "auto",
                      maxHeight: 370,
                      maxWidth: 370,
                    }}
                  ></img>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Landing;
