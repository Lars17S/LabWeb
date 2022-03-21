var express = require("express");
var router = express.Router();

router.post("/register", authController.store);
