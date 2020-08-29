
const router = require("express").Router();
const carRoutes = require("./cars");



router.use("/cars", carRoutes);
console.log("hello2")
module.exports = router;
