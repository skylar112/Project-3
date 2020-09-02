// import React, { useState, useEffect } from "react";
// import firebase from "firebase";
// import DeleteBtn from "../components/DeleteBtn";
// import UpdateBtn from "../components/UpdateBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
// import { Redirect } from "react-router-dom";

// function Cars(props) {
//   // Setting our component's initial state
//   const [cars, setCar] = useState([]);
//   const [formObject, setFormObject] = useState({});
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     if (props.user) {
//       setUserId(props.user.uid);
//       // props.setUser(user)
//       setCar([]);
//       loadCars(props.user.uid);
//     } else {
//       setCar([]);
//     }
//   }, []);

//   // Loads all books and sets them to books
//   function loadCars(uid) {
//     API.getCars({ userId: uid })
//       .then((res) => setCar(res.data))
//       .catch((err) => console.log(err));
//   }

//   // Deletes a book from the database with a given id, then reloads books from the db
//   function deleteCar(id) {
//     API.deleteCar(id)
//       .then((res) => loadCars(userId))
//       .catch((err) => console.log(err));
//   }

//   function updateCar(car) {
//     setFormObject({ ...car });
//   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({ ...formObject, [name]: value });
//   }

//   console.log(formObject);

//   // When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload books from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();

//     if (formObject._id) {
//       /// update the car
//       API.updateCar(formObject._id, {
//         year: formObject.year,
//         model: formObject.model,
//         brand: formObject.brand,
//         description: formObject.description,
//         imageURL: formObject.imageURL,
//       })
//         .then((res) => loadCars(userId))
//         .catch((err) => console.log(err));
//     } else if (formObject.year && formObject.brand) {
//       API.saveCar({
//         userId,
//         year: formObject.year,
//         model: formObject.model,
//         brand: formObject.brand,
//         description: formObject.description,
//         imageURL: formObject.imageURL,
//       })
//         .then((res) => loadCars(userId))
//         .catch((err) => console.log(err));
//     }
//   }

//   return (
//     <div style={{ marginTop: "20px" }}>
//       <Container fluid>
//         {!props.user ? (
//           <Redirect to="/" />
//         ) : (
//           <Row>
//             <Col size="md-6">
//               <form>
//                 {formObject._id ? (
//                   <input type="hidden" value={formObject._id} name="id" />
//                 ) : null}
//                 <Input
//                   onChange={handleInputChange}
//                   name="year"
//                   placeholder="Year (required)"
//                   value={formObject.year}
//                 />
//                 <Input
//                   onChange={handleInputChange}
//                   name="model"
//                   placeholder="Model (required)"
//                   value={formObject.model}
//                 />
//                 <Input
//                   onChange={handleInputChange}
//                   name="brand"
//                   placeholder="Brand (required)"
//                   value={formObject.brand}
//                 />

//                 <Input
//                   onChange={handleInputChange}
//                   name="imageURL"
//                   placeholder="imageURL (required)"
//                   value={formObject.imageURL}
//                 />

//                 <TextArea
//                   onChange={handleInputChange}
//                   name="description"
//                   placeholder="Description (Optional)"
//                   value={formObject.description}
//                 />
//                 <FormBtn
//                   disabled={!(formObject.year && formObject.model)}
//                   onClick={handleFormSubmit}
//                 >
//                   Submit Car
//                 </FormBtn>
//               </form>
//             </Col>
//             <Col size="md-6 sm-12">
//               {cars.length ? (
//                 <List>
//                   {cars.map((car) => (
//                     <ListItem key={car._id}>
//                       <Link to={"/cars/" + car._id}>
//                         <img
//                           src={car.imageURL}
//                           className="img-fluid"
//                           alt={car.brand}
//                           width={500}
//                           height={500}
//                         />
//                       </Link>
//                       <strong>
//                         <br />
//                         {car.year} <br />
//                         {car.model} <br />
//                         {car.brand} <br />
//                         {car.description} <br />
//                       </strong>

//                       <DeleteBtn onClick={() => deleteCar(car._id)} />
//                       <UpdateBtn onClick={() => updateCar(car)} />
//                     </ListItem>
//                   ))}
//                 </List>
//               ) : (
//                 <h3>No Results to Display</h3>
//               )}
//             </Col>
//           </Row>
//         )}
//       </Container>
//     </div>
//   );
// }

// export default Cars;
