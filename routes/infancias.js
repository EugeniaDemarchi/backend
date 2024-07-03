var express = require("express");
var router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("infancias");
});

module.exports = router;
