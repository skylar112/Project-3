import React, { Component } from 'react';
import {
    Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption, Card, CardImg, 
    CardTitle,
} from 'reactstrap';
import ReactPlayer from "react-player"

export default class Videos extends Component {
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

                    <br></br>
                    <div className="row unline-block">
                        <div className="col-3">
                            <CardImg top width="100%"  height = "200" src="https://www.autotrader.com/wp-content/uploads/2020/02/2020-Kia-Sedona-.2..jpg?fit=880,588&strip=all&quality=25" alt="Kia Sedona" />
                            <CardTitle>Best Used Minivan</CardTitle>
                        </div>

                        <div className="col-3">
                            <CardImg top width="100%"  height = "200" src="https://tdrpmimages.azureedge.net/photos/import/202006/2204/4615/32c8875b-e50f-499a-9ea4-b3734850df72.jpg-1024x786" alt="S560" />
                            <CardTitle>Used Luxury Sedan</CardTitle>
                        </div>

                        <div className="col-3">
                            <CardImg top width="100%"  height = "200" src="https://80b6eeaa72359a23e524-493b90cce65f0fefdf6ae7ead52e09f8.ssl.cf1.rackcdn.com/SALWS2RU0LA704650/9c5724bce038f81cc80e5be3f3d5f6d5.jpg" alt="Range Rover" />
                            <CardTitle>Used Luxury SUV</CardTitle>
                        </div>

                        <div className="col-3">
                            <CardImg top width="100%"  height = "200" src="https://cars.usnews.com/dims4/USNEWS/0216f75/2147483647/resize/640x420%3E/format/jpeg/quality/85/?url=https%3A%2F%2Fcars.usnews.com%2Fstatic%2Fimages%2Farticle%2F201801%2F127413%2F1_-_2018_Ford_F-150_Raptor_640x420.jpg" alt="Raptor" />
                            <CardTitle>Used Trucks</CardTitle>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

