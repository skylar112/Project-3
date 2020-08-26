import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

function Detail(props) {
  const [car, setCar] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { _id } = useParams();
  useEffect(() => {
    API.getCar(_id)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(car);
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          {car.year} {car.brand}
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Brief Description</h1>
            <p>{car.description}</p>
          </article>
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
