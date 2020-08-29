import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Card } from "reactstrap";

function Detail(props) {
  const [car, setCar] = useState({});

 
  const { id } = useParams();

  useEffect(() => {
    API.getCar(id)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    document.title = car.year + " " + car.brand + " " + car.model;
  }, [car]);
  console.log(car);
  return (
    <Container fluid>
      {/* <Row>
        <Col size="md-10 md-offset-1">
          <article>
           
          </article>
        </Col>
      </Row> */}
      <Row>
        <Col size="md-12">
          <h1>
            {" "}
            {car.year} {car.brand} {car.model}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <img src={car.imageURL} style={{ width: 800, height: 500 }} />{" "}
          <h5>Brief Description</h5>
          <p>{car.description}</p>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/">← Back to Cars</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
