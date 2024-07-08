var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "bghj9p2xcrrhmyb5xujw-mysql.services.clever-cloud.com",
  user: "uajartje2oigcr4q",
  password: "JOCwI0cR7JB0aCuWcd2G",
  database: "bghj9p2xcrrhmyb5xujw",
});

connection.connect();

module.exports = connection;
