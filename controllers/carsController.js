const db = require("../models");

console.log("this is db" + db.Car);

module.exports = {
  findAll: function (req, res) {
    db.Car.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Car.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  create: function (req, res) {
    console.log(req.body);

    db.Car.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  search: function (req, res) {
    const searchQuery = req.query.search;

    db.Car.find({})
      .then((dbModel) => {
        dbModel = dbModel.filter(car => {
          if (`${car.year} ${car.make} ${car.model}`.includes(searchQuery)) {
            return true;
          }

          return false
        })
        res.json(dbModel);
      })
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },

  update: function (req, res) {
    db.Car.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    db.Car.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};

console.log("control");