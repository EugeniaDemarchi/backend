var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "b5xb2jqamodbb30rz1rm-mysql.services.clever-cloud.com",
  user: "ujzmctp0fehuj2f5",
  password: "BSCezw4nhu6difRneSpd",
  database: "b5xb2jqamodbb30rz1rm",
});

connection.connect();

module.exports = connection;
