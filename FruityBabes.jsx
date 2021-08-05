import React, { useState } from "react";
import FruityBabeTemp from "../components/FruityBabeTemplate.jsx";
import Modal3 from "../components/Modals/Modal3";
import { Grid, Container } from "@material-ui/core";

const FruityBabes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFruityFriend, setCurrentFruityFriend] = useState();

  const fruityBabes = {
    babes: [
      {
        id: 1,
        title: "Blueberry Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/blueBerryGirl.jpg",
      },

      {
        id: 2,
        title: "Passionfruit Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/fruit/passionfruit.png",
      },
      {
        id: 3,
        title: "Cherry Bomb Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/fruit/cherry.png",
      },

      {
        id: 4,
        title: "Watermelon Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/fruit/watermelon.png",
      },
      {
        id: 5,
        title: "Strawberry Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/fruit/strawberry.png",
      },

      {
        id: 6,
        title: "Orange Blossom Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/fruit/orange.png",
      },
      {
        id: 7,
        title: "Kiwi Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/fruit/kiwi.png",
      },

      {
        id: 8,
        title: "Lemon Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/fruit/lemon.png",
      },
    ],
    background:
      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-cloudBG.PNG",
  };

  const mapFruityBabes = (babe) => {
    return (
      <FruityBabeTemp
        key={`FruitBabes-${babe.id}`}
        babe={babe}
        imageUrl={fruityBabes.babes.imageUrl}
        title={fruityBabes.babes.title}
        handleClick={handleClick}
      />
    );
  };

  const handleClick = (e, res) => {
    console.log(e, res);
    let babe = e.imageUrl;
    setIsModalOpen(true);
    setCurrentFruityFriend(babe);
  };

  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          padding: 50,
          backgroundImage: "url(" + fruityBabes.background + ")",
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          spacing={2}
        >
          <Grid item xs={6} className="justify-content-flex-start"></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
          <Modal3
            open={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            initialValue={currentFruityFriend}
          />

          {fruityBabes.babes.map(mapFruityBabes)}
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default FruityBabes;
