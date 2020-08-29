import React, { Component } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';
import "./style.css";

export default class Services extends Component {
    render() {
        return (
            <div className="card">
                <div className="container">
                    <h1>Best Used Cars</h1>
                    <div className="row unline-block">
                        <div className="col-3">

                            <a href="https://cars.usnews.com/cars-trucks/rankings/used/midsize-cars-1" target="_blank">
                                <CardImg className="cards" top width="100%" height="200" src="https://cdn.arstechnica.net/wp-content/uploads/2018/06/Honda-Accord-Sport-3.jpg" alt="Accord" />
                                <CardTitle>Sedans</CardTitle>
                            </a>


                        </div>
                        <div className="col-3 cars">
                            <a href="https://www.autolist.com/guides/best-used-sports-cars-under-30000" target="_blank">
                                <CardImg className="cards" top width="100%" height="200" src="https://www.motorcarclassics.com/galleria_images/311/311_main_l.jpg" alt="Audi R8" />
                                <CardTitle >Sport</CardTitle>
                            </a>


                        </div>
                        <div className="col-3">
                            <a href="https://cars.usnews.com/cars-trucks/rankings/used/compact-suvs-1" target="_blank">
                                <CardImg className="cards" top width="100%" height="200" src="https://cdn.jdpower.com/ArticleImages/2019%20Honda%20CR-V_032%20730.jpg" alt="CRV" />
                                <CardTitle>Compact SUV</CardTitle>
                            </a>


                        </div>
                        <div className="col-3">
                            <a href="https://cars.usnews.com/cars-trucks/used-cars/for-sale/suv" target="_blank">
                                <CardImg className="cards" top width="100%" height="200" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-gmc-yukon-mmp-1-1568149105.png?crop=0.755xw:1.00xh;0.125xw,0&resize=640:*" alt="Yukon Denali" />
                                <CardTitle>SUV</CardTitle>
                            </a>
                        </div>
                    </div>
                    <br></br>
                    <div className="row unline-block">
                        <div className="col-3">
                            <a href="https://cars.usnews.com/cars-trucks/used-cars/for-sale/minivan" target="_blank">
                                <CardImg className="cards" top width="100%" height="200" src="https://www.autotrader.com/wp-content/uploads/2020/02/2020-Kia-Sedona-.2..jpg?fit=880,588&strip=all&quality=25" alt="Kia Sedona" />
                                <CardTitle>Minivan</CardTitle>
                            </a>
                        </div>

                        <div className="col-3">
                            <a href="https://cars.usnews.com/cars-trucks/rankings/used/upscale-midsize-cars-3" target="_blank">
                                <CardImg className="cards" top width="100%" height="200" src="https://tdrpmimages.azureedge.net/photos/import/202006/2204/4615/32c8875b-e50f-499a-9ea4-b3734850df72.jpg-1024x786" alt="S560" />
                                <CardTitle>Luxury Sedan</CardTitle>
                            </a>
                        </div>

                        <div className="col-3">
                            <a href="https://cars.usnews.com/cars-trucks/best-used-luxury-suv" target="_blank">
                                <CardImg className="cards" top width="100%" height="200" src="https://80b6eeaa72359a23e524-493b90cce65f0fefdf6ae7ead52e09f8.ssl.cf1.rackcdn.com/SALWS2RU0LA704650/9c5724bce038f81cc80e5be3f3d5f6d5.jpg" alt="Range Rover" />
                                <CardTitle>Luxury SUV</CardTitle>
                            </a>

                        </div>

                        <div className="col-3">
                            <a href="https://cars.usnews.com/cars-trucks/rankings/used/full-size-trucks-1" target="_blank">
                                <CardImg className="cards" top width="100%" height="200" src="https://cars.usnews.com/dims4/USNEWS/0216f75/2147483647/resize/640x420%3E/format/jpeg/quality/85/?url=https%3A%2F%2Fcars.usnews.com%2Fstatic%2Fimages%2Farticle%2F201801%2F127413%2F1_-_2018_Ford_F-150_Raptor_640x420.jpg" alt="Raptor" />
                                <CardTitle>Used Trucks</CardTitle>
                            </a>

                        </div>
                    </div>
                </div>
                
            </div>
           
        );
    }
}
