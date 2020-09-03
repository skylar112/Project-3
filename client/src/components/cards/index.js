import React, { Component } from "react";
import { CardImg, CardTitle } from "reactstrap";
import "./style.css";
export default class cards extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1>Used Cars</h1>
                        <div className="row unline-block">
                            <div className="col-12 col-md-3 cars">
                                <a href="https://cars.usnews.com/cars-trucks/rankings/used/midsize-cars-1" target="_blank">
                                    <CardImg className="cards img-fluid" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBR38cJ.img?w=354&h=236&m=7" alt="Accord" />
                                    <CardTitle>
                                        <h3>Sedans</h3>
                                    </CardTitle>
                                </a>
                            </div>
                            <div className="col-12 col-md-3 cars">
                                <a href="https://www.autolist.com/guides/best-used-sports-cars-under-30000" target="_blank">
                                    <CardImg className="cards img-fluid" src="https://vignette.wikia.nocookie.net/forzamotorsport/images/e/eb/HOR_XB1_Audi_RS_6_03_Small.png/revision/latest/scale-to-width-down/340?cb=20200403134411" alt="Audi R8" />
                                    <CardTitle >
                                        <h3>Sport Cars</h3>
                                    </CardTitle>
                                </a>
                            </div>
                            <div className="col-12 col-md-3 cars">
                                <a href="https://cars.usnews.com/cars-trucks/rankings/used/compact-suvs-1" target="_blank">
                                    <CardImg className="cards img-fluid" src="https://www.pngarts.com/files/4/Honda-CRV-Download-Transparent-PNG-Image.png" alt="CRV" />
                                    <CardTitle>
                                        <h3>Compact SUV</h3>
                                    </CardTitle>
                                </a>
                        </div>
                            <div className="col-12 col-md-3 cars">
                                <a href="https://www.caranddriver.com/features/g8525152/best-midsize-suv/?utm_source=google&utm_medium=cpc&utm_campaign=arb_dda_ga_cd_md_bm_hp_g8525152&gclid=CjwKCAjw4rf6BRAvEiwAn2Q76ghASb7HSj6GEgNpBB75Smmec6NRnJhJzYBW5BZh2Vnp6sZM-HsrqRoCSkoQAvD_BwE" target="_blank">
                                    <CardImg className="cards img-fluid" src="https://www.cstatic-images.com/car-pictures/xl/usc80gms031b021001.png" alt="Yukon" />
                                    <CardTitle>
                                        <h3>SUV</h3>
                                    </CardTitle>
                                </a>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row unline-block">
                        <div className="col-12 col-md-3 cars">
                            <a href="https://cars.usnews.com/cars-trucks/used-cars/for-sale/minivan" target="_blank">
                                <CardImg className="cards img-fluid" src="https://www.cstatic-images.com/car-pictures/xl/usc90kiv011d021001.png" alt="Kia Sedona" />
                                <CardTitle>
                                    <h3>Minivan</h3>
                                </CardTitle>
                            </a>
                        </div>
                        <div className="col-12 col-md-3 cars">
                            <a href="https://cars.usnews.com/cars-trucks/rankings/used/upscale-midsize-cars-3" target="_blank">
                                <CardImg className="cards img-fluid" src="https://www.cstatic-images.com/car-pictures/xl/usd00auc031a021001.png" alt="Audi A6" />
                                <CardTitle>
                                    <h3>Luxury Sedan</h3>
                                </CardTitle>
                            </a>
                        </div>
                        <div className="col-12 col-md-3 cars">
                            <a href="https://cars.usnews.com/cars-trucks/rankings/used/upscale-midsize-cars-3" target="_blank">
                                <CardImg className="cards img-fluid" src="https://pngimg.com/uploads/land_rover/land_rover_PNG83.png" alt="Range Rover" />
                                <CardTitle>
                                    <h3>Luxury SUV</h3>
                                </CardTitle>
                            </a>
                        </div>
                        <div className="col-12 col-md-3 cars">
                            <a href="https://cars.usnews.com/cars-trucks/rankings/used/full-size-trucks-1" target="_blank">
                                <CardImg className="cards img-fluid" width="100%" height="200" src="https://www.cstatic-images.com/car-pictures/xl/cac10fot11ea0101.png" alt="Raptor" />
                                <CardTitle>
                                    <h3>Trucks</h3>
                                </CardTitle>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
