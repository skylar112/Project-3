import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [cars, setCars] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadCars();
  }, []);

  // Loads all books and sets them to books
  function loadCars() {
    API.getCars()
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteCar(id) {
    API.deleteCar(id)
      .then((res) => loadCars())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.year && formObject.brand) {
      API.saveBook({
        year: formObject.year,
        brand: formObject.brand,
        description: formObject.description,
        imageURL: formObject.imageURL,
      })
        .then((res) => loadCars())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>CAR?</h1>
          </Jumbotron>
          <form>
            <img src={cars.imageURL} alt={cars.brand} />

            <Input
              onChange={handleInputChange}
              name="year"
              placeholder="Year (required)"
            />
            <Input
              onChange={handleInputChange}
              name="model"
              placeholder="Model (required)"
            />

            <TextArea
              onChange={handleInputChange}
              name="description"
              placeholder="Description (Optional)"
            />
            <FormBtn
              disabled={!(formObject.year && formObject.model)}
              onClick={handleFormSubmit}
            >
              Submit Car
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Cars On My List</h1>
          </Jumbotron>
          {cars.length ? (
            <List>
              {cars.map((car) => (
                <ListItem key={car._id}>
                  <Link to={"/car/" + car._id}>
                    <strong>
                      {car.year} {car.brand}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteCar(car._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
