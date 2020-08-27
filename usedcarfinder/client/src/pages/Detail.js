import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Card } from "reactstrap";

function Detail(props) {
  const [car, setCar] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams();

  useEffect(() => {
    API.getCar(id)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    document.title = car.year + ' ' + car.brand + ' ' + car.model
  }, [car])
  console.log(car);
  return (
    <Container fluid>
     
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Brief Description</h1>
            <p>{car.description}</p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          {car.year} {car.brand} 
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
      <img src={car.imageURL} style={{width:250, height:250}}/>
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
