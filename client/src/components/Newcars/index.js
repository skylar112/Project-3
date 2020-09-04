import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";

import "./style.css";
export default class Newcars extends Component {
    render() {
        return (
            <div id="newCars">
                <div>
                    <div>
                        <h1>New Cars</h1>
                        <div className="row unline-block">
                            <div className="col-12 col-md-3 cars">
                                <a href="https://www.caranddriver.com/features/g27227136/best-sedans/" target="_blank">
                                    <CardImg className="cards img-fluid" src="https://www.cstatic-images.com/car-pictures/xl/usc50toc021b021001.png" alt="2021 Camry" />
                                    <CardTitle>
                                        <h3>Sedans</h3>
                                    </CardTitle>
                                </a>
                            </div>
                            <div className="col-12 col-md-3 cars">
                                <a href="https://www.autolist.com/guides/best-used-sports-cars-under-30000" target="_blank">
                                    <CardImg className="cards img-fluid" src="https://www.cstatic-images.com/car-pictures/xl/usd00mbcar2a021001.png" alt="Mercedes GTR" />
                                    <CardTitle >
                                        <h3>Sport Cars</h3>
                                    </CardTitle>
                                </a>
                            </div>
                            <div className="col-12 col-md-3 cars">
                                <a href="https://www.caranddriver.com/features/g15383346/best-subcompact-suv-ranked/?utm_source=google&utm_medium=cpc&utm_campaign=arb_dda_ga_cd_md_bm_hp_g15383346&gclid=CjwKCAjw4rf6BRAvEiwAn2Q76ibXGVnY7FtMDbyU2UX_bXiZ4vc0w1mSMICWVAXx4QkIaK0C1MXA1BoCO98QAvD_BwE&slide=5" target="_blank">
                                    <CardImg className="cards img-fluid" src="https://www.cstatic-images.com/car-pictures/xl/USC90TOS202B021001.png" alt="Chevy Trax" />
                                    <CardTitle>
                                        <h3>Compact SUV</h3>
                                    </CardTitle>
                                </a>
                        </div>
                            <div className="col-12 col-md-3 cars">
                                <a href="https://www.caranddriver.com/features/g8525152/best-midsize-suv/?utm_source=google&utm_medium=cpc&utm_campaign=arb_dda_ga_cd_md_bm_hp_g8525152&gclid=CjwKCAjw4rf6BRAvEiwAn2Q76ghASb7HSj6GEgNpBB75Smmec6NRnJhJzYBW5BZh2Vnp6sZM-HsrqRoCSkoQAvD_BwE" target="_blank">
                                    <CardImg className="cards img-fluid" src="https://www.cstatic-images.com/car-pictures/xl/usc80vws051d021001.png" alt="YW Atlas" />
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
                            <a href="https://www.caranddriver.com/features/g27196547/best-vans-minivans/" target="_blank">
                                <CardImg className="cards img-fluid" src="https://www.cstatic-images.com/car-pictures/xl/usc90hov011e021001.png" alt="Honda Odyssey" />
                                <CardTitle>
                                    <h3>Minivan</h3>
                                </CardTitle>
                            </a>
                        </div>
                        <div className="col-12 col-md-3 cars">
                            <a href="https://cars.usnews.com/cars-trucks/rankings/upscale-midsize-cars" target="_blank">
                                <CardImg className="cards img-fluid" src="https://www.cstatic-images.com/car-pictures/xl/usd00auc031a021001.png" alt="Audi A6" />
                                <CardTitle>
                                    <h3>Luxury Sedan</h3>
                                </CardTitle>
                            </a>
                        </div>
                        <div className="col-12 col-md-3 cars">
                            <a href="https://www.caranddriver.com/features/g24419845/mid-size-luxury-crossovers-suvs-ranked/?slide=1" target="_blank">
                                <CardImg className="cards img-fluid" src="https://www.cstatic-images.com/car-pictures/xl/usc90bms282b021001.png" alt="Lexus GX460" />
                                <CardTitle>
                                    <h3>Luxury SUV</h3>
                                </CardTitle>
                            </a>
                        </div>
                        <div className="col-12 col-md-3 cars">
                            <a href="https://www.caranddriver.com/features/g27242492/best-pickup-trucks/" target="_blank">
                                <CardImg className="cards img-fluid" width="100%" height="200" src="https://www.cstatic-images.com/car-pictures/xl/usd00gmt32ec021001.png" alt="GMC Canyon" />
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