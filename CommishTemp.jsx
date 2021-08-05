import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid } from "@material-ui/core";
import "./style.css";

const CommishTemp = (props) => {
  return (
    <React.Fragment>
      <Grid item>
        <Card className="card-box-hover-rise mb-4 justify-content-center shadow">
          <CardContent className="p-3 justify-center">
            <div className="bt text-black">
              <div className="box zoom">
                <img
                  style={{
                    height: "auto",
                    width: "auto",
                    maxHeight: 600,
                    maxWidth: 400,
                    marginBottom: 30,
                  }}
                  src={props.commission.imageUrl}
                  className="image rounded"
                  alt="..."
                ></img>
                <h3
                  style={{ fontFamily: "Brush Script MT" }}
                  className="text-black"
                ></h3>
                <div className="middle">
                  <div className="text">{props.commission.title}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

CommishTemp.propTypes = {
  commission: PropTypes.shape({
    imageUrl: PropTypes,
    title: PropTypes.string,
  }),
};

export default CommishTemp;
