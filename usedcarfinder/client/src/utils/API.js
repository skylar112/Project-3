import axios from "axios";

export default {
  // Gets all books
  getCars: function ({ userId }) {
    return axios.get("/api/cars?userId=" + userId);
  },
  // Gets the book with the given id
  getCar: function (id) {
    return axios.get("/api/cars/" + id);
  },
  updateCar: function (id, car) {
    return axios.put("/api/cars/" + id, {
      ...car,
    });
  },
  // Deletes the book with the given id
  deleteCar: function (id) {
    return axios.delete("/api/cars/" + id);
  },
  // Saves a book to the database
  saveCar: function (carData) {
    return axios.post("/api/cars", carData);
  },
};
