const router = require("express").Router();
const userController = require("../controller/UserController");

router.get("/", userController);

module.exports = router;