import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import "./style.css";

export default class Services extends Component {
  render() {
    return (
      <div className="card">
        <div className="container">
          <h1>New Cars</h1>
          <div className="row unline-block">
            <div className="col-3">
              <a
                href="https://www.caranddriver.com/features/g27227136/best-sedans/"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://media.ed.edmunds-media.com/toyota/camry/2020/oem/2020_toyota_camry_sedan_xle_fq_oem_1_1600.jpg"
                  alt="2021 Camry"
                />
                <CardTitle>Sedans</CardTitle>
              </a>
            </div>
            <div className="col-3 cars">
              <a
                href="https://www.autolist.com/guides/best-used-sports-cars-under-30000"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://images.spot.im/v1/production/a2zmtgdpr1t8dq4zpd2k"
                  alt="Mercedes GTR"
                />
                <CardTitle>Sport Cars</CardTitle>
              </a>
            </div>
            <div className="col-3">
              <a
                href="https://www.caranddriver.com/features/g15383346/best-subcompact-suv-ranked/?utm_source=google&utm_medium=cpc&utm_campaign=arb_dda_ga_cd_md_bm_hp_g15383346&gclid=CjwKCAjw4rf6BRAvEiwAn2Q76ibXGVnY7FtMDbyU2UX_bXiZ4vc0w1mSMICWVAXx4QkIaK0C1MXA1BoCO98QAvD_BwE&slide=5"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://www.autotrader.com/wp-content/uploads/2020/05/2021-chevrolet-trax-front-right-side.jpg?w=1024"
                  alt="Chevy Trax"
                />
                <CardTitle>Compact SUV</CardTitle>
              </a>
            </div>
            <div className="col-3">
              <a
                href="https://www.caranddriver.com/features/g8525152/best-midsize-suv/?utm_source=google&utm_medium=cpc&utm_campaign=arb_dda_ga_cd_md_bm_hp_g8525152&gclid=CjwKCAjw4rf6BRAvEiwAn2Q76ghASb7HSj6GEgNpBB75Smmec6NRnJhJzYBW5BZh2Vnp6sZM-HsrqRoCSkoQAvD_BwE"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-atlas-large-8754-1557427909.jpg?crop=0.845xw:1.00xh;0.155xw,0&resize=768:*"
                  alt="YW Atlas"
                />
                <CardTitle>SUV</CardTitle>
              </a>
            </div>
          </div>
          <br></br>
          <div className="row unline-block">
            <div className="col-3">
              <a
                href="https://www.caranddriver.com/features/g27196547/best-vans-minivans/"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://www.autotrader.com/wp-content/uploads/2020/06/2021-honda-odyssey-front-left-side.jpg?w=1024"
                  alt="Honda Odyssey"
                />
                <CardTitle>Minivan</CardTitle>
              </a>
            </div>

            <div className="col-3">
              <a
                href="https://cars.usnews.com/cars-trucks/rankings/upscale-midsize-cars"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://www.autotrader.com/wp-content/uploads/2020/06/2021-audi-a4-front-left-side.jpg?w=1024"
                  alt="Audi A6"
                />
                <CardTitle>Luxury Sedan</CardTitle>
              </a>
            </div>

            <div className="col-3">
              <a
                href="https://www.caranddriver.com/features/g24419845/mid-size-luxury-crossovers-suvs-ranked/?slide=1"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-lexus-gx-112-flip-1573487608.jpg?crop=0.434xw:0.453xh;0.401xw,0.270xh&resize=980:*"
                  alt="Lexus GX460"
                />
                <CardTitle>Luxury SUV</CardTitle>
              </a>
            </div>

            <div className="col-3">
              <a
                href="https://www.caranddriver.com/features/g27242492/best-pickup-trucks/"
                target="_blank"
              >
                <CardImg
                  className="cards img-fluid"
                  width="100%"
                  height="200"
                  src="https://www.autotrader.com/wp-content/uploads/2020/02/2020-GMC-Canyon-.5..jpg?w=1024"
                  alt="GMC Canyon"
                />
                <CardTitle>Trucks</CardTitle>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
