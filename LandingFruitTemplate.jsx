import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const LandingFruitTemplate = (props) => {
  const onHandleClick = () => {
    props.handleClick(props.babe);
  };

  return (
    <div className="col-md rounded" style={{ padding: 10 }}>
      <div className="box">
        <img
          onClick={onHandleClick}
          style={{
            height: "auto",
            width: "auto",
            maxHeight: 200,
            maxWidth: 200,
          }}
          src={props.babe.imageUrl}
          className="image shadow roundCorners"
        />
        <div className="middle"></div>
      </div>
    </div>
  );
};

LandingFruitTemplate.propTypes = {
  babe: PropTypes.shape({
    imageUrl: PropTypes.string,
  }),
  handleClick: PropTypes.func,
};

export default LandingFruitTemplate;
