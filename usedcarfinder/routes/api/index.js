
const router = require("express").Router();
const carRoutes = require("./cars");

// Book routes
router.use("/cars", carRoutes);

module.exports = router;
