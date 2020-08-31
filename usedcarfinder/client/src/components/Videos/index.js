import React, { Component } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';
import ReactPlayer from "react-player"

export default class Videos extends Component {
    state = { videoindex: 0 }

    videoUrl = [

        "https://www.youtube.com/watch?v=BtY9Nmm2z0U",
        "https://www.youtube.com/watch?v=BHgwd6YKWlU",
        "https://www.youtube.com/watch?v=RUx6FfhPLw4",
        "https://www.youtube.com/watch?v=zgT_4khybEw",
        "https://www.youtube.com/watch?v=vyaNeKZjHcI",
        "https://www.youtube.com/watch?v=drbhNLvYxGQ",
        "https://www.youtube.com/watch?v=xvtVSGpKdto"

    ]

    render() {
        return (
            <div className="container">
                <h1>Found your next car? Scroll through our video player for help on next steps</h1>
                 <div className="row ">
                    <div className="col-6">
                        <div>
                            <ReactPlayer
                                url={this.videoUrl[this.state.videoindex]}
                            />
                        </div>
                    </div>
                    <div className="col-6 cars">
                        <div>
                            <h1>{this.state.videoindex}</h1>
                        </div>
                    </div>
                    <button onClick={() => this.setState({ videoindex: this.state.videoindex - 1 })}>Previous</button>
                    <button onClick={() => this.setState({ videoindex: this.state.videoindex + 1 })}>Next</button>
                </div>
            </div>
        );
    }
}