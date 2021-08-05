import React from "react";
import { IconButton, Tooltip, Grid } from "@material-ui/core";
import github from "../assets/images/icons/github.png";
import instagram from "../assets/images/icons/instagram.png";
import linkedin from "../assets/images/icons/linkedin.png";
import email from "../assets/images/icons/email.png";

const Contact = () => {
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <div>
          <div className="row">
            <div
              style={{
                marginTop: 30,
                marginRight: 200,
                padding: 20,
                paddingBottom: 40,
              }}
              className="col md-6 bg-warning rounded"
            >
              <h1
                className="text-white text-size-xxl font-weight-bold"
                style={{
                  fontFamily: "Brush Script MT",
                  marginTop: 20,
                  marginLeft: 70,
                }}
              >
                Let's get in touch!
              </h1>
              <div style={{ marginLeft: 45 }} className="col-md-8">
                <Tooltip arrow title="Github">
                  <IconButton
                    className="nav-link text-white text-bold"
                    href="https://github.com/Becca-Guertin"
                    rel="noopener nofollow"
                    target="_blank"
                  >
                    <span className="btn-wrapper--icon">
                      <img
                        style={{ marginRight: 10, height: 25, width: 25 }}
                        src={github}
                      />
                    </span>
                    /Becca-Guertin
                  </IconButton>
                </Tooltip>
              </div>
              <div style={{ marginLeft: 45 }} className="col-md-8">
                <Tooltip arrow title="LinkedIn">
                  <IconButton
                    className="nav-link text-white text-bold"
                    href="https://www.linkedin.com/in/rebecca-guertin/"
                    rel="noopener nofollow"
                    target="_blank"
                  >
                    <span className="btn-wrapper--icon">
                      <img
                        style={{ marginRight: 10, height: 25, width: 25 }}
                        src={linkedin}
                      />
                    </span>
                    /rebecca-guertin/
                  </IconButton>
                </Tooltip>
              </div>
              <div style={{ marginLeft: 45 }} className="col-md-4">
                <Tooltip arrow title="Instagram">
                  <IconButton
                    className="nav-link text-white text-bold"
                    href="https://www.instagram.com/sunflowerpopshop/"
                    rel="noopener nofollow"
                    target="_blank"
                  >
                    <span className="btn-wrapper--icon">
                      <img
                        style={{ marginRight: 10, height: 25, width: 25 }}
                        src={instagram}
                      />
                    </span>
                    @sunflowerpopshop
                  </IconButton>
                </Tooltip>
              </div>
              <div style={{ marginLeft: 45 }} className="col-md-4">
                <Tooltip arrow title="Email">
                  <IconButton
                    className="nav-link text-white text-bold"
                    href=""
                    rel="noopener nofollow"
                    target="_blank"
                  >
                    <span className="btn-wrapper--icon">
                      <img
                        style={{ marginRight: 10, height: 25, width: 25 }}
                        src={email}
                      />
                    </span>
                    becca_guertin@outlook.com
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </React.Fragment>
  );
};

export default Contact;
