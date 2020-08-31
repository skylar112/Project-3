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
        "https://www.youtube.com/watch?v=xvtVSGpKdto",


    ]

    render() {
        return (
            <div className="container">
                <h1>Found your next car? </h1>
                <div className="row unline-block">
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
                    <button onClick={() => this.setState({ videoindex: this.state.videoindex - 1 })}>Left</button>
                    <button onClick={() => this.setState({ videoindex: this.state.videoindex + 1 })}>Right</button>
                </div>
            </div>
        );
    }
}