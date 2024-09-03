const router = require("express").Router();
const protectedController = require("../controller/ProtectedController");
const authController = require("../controller/authController");

router.use("/", authController, protectedController);

module.exports = router;