const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcarlist");

const carSeed = [
  {
    year: 1999,
    brand: "Toyota",
    model: "4runner",
    description: "rust",
    imageURL:
      "https://postmediadriving.files.wordpress.com/2013/08/85678741.jpg?quality=80&strip=all&w=580&h=370&crop=1",
    datePosted: new Date(Date.now()),
  },
  {
    year: 2006,
    brand: "Audi",
    model: "rs6",
    description: "fast",
    imageURL:
      "https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/18tobbisyjnpsjpg.jpg",
    datePosted: new Date(Date.now()),
  },
  {
    year: 2016,
    brand: "Mercedes",
    model: "g63 amg",
    description: "box",
    imageURL:
      "https://bringatrailer.com/wp-content/uploads/2019/12/2016_mercedes-benz_g63_designo_studio_edition_1577075887a2daeb572016_mercedes-benz_g63_designo_studio_edition_15763505420f3b4e10dcIMG_0191-e1577077994599.jpg?fit=940%2C627",
    datePosted: new Date(Date.now()),
  },
];

db.Car.remove({})
  .then(() => db.Car.collection.insertMany(carSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
