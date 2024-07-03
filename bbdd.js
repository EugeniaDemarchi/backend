var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "tpartevivo",
});

connection.connect();

module.exports = connection;
