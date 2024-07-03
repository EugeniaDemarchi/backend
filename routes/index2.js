var express = require("express");
var router = express.Router();
const multer = require("multer");
//const upload = multer({ dest: "uploads/" });
const fs = require("fs");

router.get("/", function (req, res, next) {
  res.render("index2");
});

// connection.end();
module.exports = router;
