const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  year: { type: Number, min: 1969, max: 2021 },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  description: String,
  imageURL: String,
  userId: String,
  datePosted: { type: Date, default: Date.now },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
