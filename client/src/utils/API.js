import axios from "axios";

export default {
  getCars: function ({ userId }) {
    return axios.get("/api/cars?userId=" + userId);
  },

  getCar: function (id) {
    return axios.get("/api/cars/" + id);
  },
  updateCar: function (id, car) {
    return axios.put("/api/cars/" + id, {
      ...car,
    });
  },

searchCar: function(searchValue){
return axios.get("/api/cars/search?search=" + searchValue);
},


  deleteCar: function (id) {
    return axios.delete("/api/cars/" + id);
  },

  saveCar: function (carData) {
    return axios.post("/api/cars", carData);
  },
};
