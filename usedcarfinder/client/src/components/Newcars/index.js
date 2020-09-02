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
                    <h1>New Cars</h1>
                    <div className="row unline-block">
                    <div className="col-12 col-md-3 cars">

                            <a href="https://www.caranddriver.com/features/g27227136/best-sedans/" target="_blank">
                                <CardImg className="cards img-fluid"  width="100%" height="200" src="https://cdn.static-carindigo.com/tr:w-1260,h-630,ow-103.33333333333,oi-carindigo@images@carindigo_logo_white.png,ox-10,oy-10,di-no_image_SJKGShVtN.png/images/news/featured_2021-toyota-camry-features-pricing-performance-mpg-and-rivals-compared_1591291927.jpg" alt="2021 Camry" />
                                <CardTitle>Sedans</CardTitle>
                            </a>


                        </div>
                        <div className="col-12 col-md-3 cars">
                            <a href="https://www.autolist.com/guides/best-used-sports-cars-under-30000" target="_blank">
                                <CardImg className="cards img-fluid" width="100%" height="200" src="https://images.spot.im/v1/production/a2zmtgdpr1t8dq4zpd2k" alt="Mercedes GTR" />
                                <CardTitle >Sport Cars</CardTitle>
                            </a>


                        </div>
                        <div className="col-12 col-md-3 cars">
                            <a href="https://www.caranddriver.com/features/g15383346/best-subcompact-suv-ranked/?utm_source=google&utm_medium=cpc&utm_campaign=arb_dda_ga_cd_md_bm_hp_g15383346&gclid=CjwKCAjw4rf6BRAvEiwAn2Q76ibXGVnY7FtMDbyU2UX_bXiZ4vc0w1mSMICWVAXx4QkIaK0C1MXA1BoCO98QAvD_BwE&slide=5" target="_blank">
                                <CardImg className="cards img-fluid" width="100%" height="200" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/18chtx35001-a-1594912140.jpg?crop=1xw:1xh;center,top&resize=980:*&output-quality=50" alt="Chevy Trax" />
                                <CardTitle>Compact SUV</CardTitle>
                            </a>


                        </div>
                        <div className="col-12 col-md-3 cars">
                            <a href="https://www.caranddriver.com/features/g8525152/best-midsize-suv/?utm_source=google&utm_medium=cpc&utm_campaign=arb_dda_ga_cd_md_bm_hp_g8525152&gclid=CjwKCAjw4rf6BRAvEiwAn2Q76ghASb7HSj6GEgNpBB75Smmec6NRnJhJzYBW5BZh2Vnp6sZM-HsrqRoCSkoQAvD_BwE" target="_blank">
                                <CardImg className="cards img-fluid"  width="100%" height="200" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-atlas-large-8754-1557427909.jpg?crop=0.845xw:1.00xh;0.155xw,0&resize=768:*" alt="YW Atlas" />
                                <CardTitle>SUV</CardTitle>
                            </a>
                        </div>
                    </div>
                    <br></br>
                    <div className="row unline-block">
                    <div className="col-12 col-md-3 cars">
                            <a href="https://www.caranddriver.com/features/g27196547/best-vans-minivans/" target="_blank">
                                <CardImg className="cards img-fluid"  width="100%" height="200" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-honda-odyssey-mmp-1-1565727418.jpg?crop=0.503xw:0.378xh;0.109xw,0.505xh&resize=980:*" alt="Honda Odyssey" />
                                <CardTitle>Minivan</CardTitle>
                            </a>
                        </div>

                        <div className="col-12 col-md-3 cars">
                            <a href="https://cars.usnews.com/cars-trucks/rankings/upscale-midsize-cars" target="_blank">
                                <CardImg className="cards img-fluid" width="100%" height="200" src="https://cars.usnews.com/static/images/Auto/custom/14064/2020_Audi_A6_2.jpg" alt="Audi A6" />
                                <CardTitle>Luxury Sedan</CardTitle>
                            </a>
                        </div>
                        <div className="col-12 col-md-3 cars">
                            <a href="https://www.caranddriver.com/features/g24419845/mid-size-luxury-crossovers-suvs-ranked/?slide=1" target="_blank">
                                <CardImg className="cards img-fluid"  width="100%" height="200" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-lexus-gx-112-flip-1573487608.jpg?crop=0.434xw:0.453xh;0.401xw,0.270xh&resize=980:*" alt="Lexus GX460" />
                                <CardTitle>Luxury SUV</CardTitle>
                            </a>

                        </div>

                        <div className="col-12 col-md-3 cars">
                            <a href="https://www.caranddriver.com/features/g27242492/best-pickup-trucks/" target="_blank">
                                <CardImg className="cards img-fluid"  width="100%" height="200" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2016-gmc-canyon-slt-diesel-084-1580598511.jpg?crop=0.604xw:0.452xh;0.179xw,0.367xh&resize=980:*" alt="GMC Canyon" />
                                <CardTitle>Trucks</CardTitle>
                            </a>

                        </div>
                    </div>
                </div>
                
            </div>
           
        );
    }
}
