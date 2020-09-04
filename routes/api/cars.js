const router = require("express").Router();
const carsController = require("../../controllers/carsController");

router.route("/").get(carsController.findAll).post(carsController.create);

router
  .route("/:id")
  .get(carsController.findById)
  .put(carsController.update)
  .delete(carsController.remove);

console.log("hello3");

module.exports = router;
