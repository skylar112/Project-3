import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import ReactPlayer from "react-player";
import "./style.css";

export default class Videos extends Component {
  state = { videoindex: 0 };
  videoUrl = [
    "https://www.youtube.com/watch?v=BtY9Nmm2z0U",
    "https://www.youtube.com/watch?v=BHgwd6YKWlU",
    "https://www.youtube.com/watch?v=RUx6FfhPLw4",
    "https://www.youtube.com/watch?v=zgT_4khybEw",
    "https://www.youtube.com/watch?v=vyaNeKZjHcI",
    "https://www.youtube.com/watch?v=drbhNLvYxGQ",
    "https://www.youtube.com/watch?v=xvtVSGpKdto",
  ];
  render() {
    return (
      <div className="video" id="video">
        <h1>Found your next car?</h1>
        <div className="row ">
          <div className="col-12 col-md-6">
            <div>
              <ReactPlayer
                url={this.videoUrl[this.state.videoindex]}
                width="100%"
              />
              <button
                className="btn btn-success Previous"
                onClick={() =>
                  this.setState({ videoindex: this.state.videoindex - 1 })
                }
              >
                Previous
              </button>
              <button
                className="btn btn-info Next"
                onClick={() =>
                  this.setState({ videoindex: this.state.videoindex + 1 })
                }
              >
                Next
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 cars ">
            <div>
              <h2>Comments Here</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
