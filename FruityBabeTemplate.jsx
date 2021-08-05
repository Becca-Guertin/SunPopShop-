import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent } from "@material-ui/core";

const FruityBabeTemp = (props) => {
  const onHandleClick = () => {
    props.handleClick(props.babe);
  };

  return (
    <div className="col-md">
      <Card className="card-box-hover-rise mb-4 justify-content-center shadow">
        <CardContent className="p-3 justify-center">
          <div className="bt text-black" onClick={onHandleClick}>
            <div className="box">
              <img
                style={{
                  height: "auto",
                  width: "auto",
                  maxHeight: 475,
                  maxWidth: 290,
                  marginBottom: 30,
                }}
                src={props.babe.imageUrl}
                className="image rounded"
                alt="..."
              ></img>
              <h3
                style={{ fontFamily: "Brush Script MT" }}
                className="text-black"
              ></h3>
              <div className="middle">
                <div className="text">{props.babe.title}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

FruityBabeTemp.propTypes = {
  babe: PropTypes.shape({
    imageUrl: PropTypes,
    title: PropTypes.string,
  }),
  handleClick: PropTypes.func,
};

export default FruityBabeTemp;
