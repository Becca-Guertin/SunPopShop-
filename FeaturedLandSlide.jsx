import React from "react";
import { useEffect, useState } from "react";
import "./style.css";

const FeaturedLandSlide = () => {
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const images = [
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/WhiteBangRainbowBriteTexture.png",
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/ClownBabeTexture.png",
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/StrawbbcremeGalaxyB%26Wtex.png",
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/QueenOfHeartBabeTex.png",
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/BlueRedGirltex.png",
    "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/AlienConeFlowerHeadTex.PNG",
  ];

  return (
    <img
      className="shadow roundCorners1 zoom"
      src={images[index]}
      alt=""
      style={{
        maxHeight: 390,
        maxWidth: "auto",
        marginBottom: 40,
      }}
    />
  );
};

export default FeaturedLandSlide;
