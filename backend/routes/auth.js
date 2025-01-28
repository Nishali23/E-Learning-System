const express = require("express");
const router = express.Router();

const { signup, login, checkUser } = require("../controllers/auth");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
