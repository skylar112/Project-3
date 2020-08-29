import React, { Component } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';
import ReactPlayer from "react-player"
export default class Services extends Component {
    render() {
        return (
            <div className="container">
                <h1>Found your next car? </h1>
                <div className="row unline-block">
                    <div className="col-6">
                        <div>
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=BtY9Nmm2z0U"
                            />
                        </div>
                    </div>
                    <div className="col-6 cars">
                        <div>
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=xvtVSGpKdto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}