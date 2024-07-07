var mysql = require("mysql");

var connection = mysql.createConnection({
<<<<<<< HEAD
  host: "localhost",
  user: "root",
  password: "root",
  database: "tpartevivo",
=======
  host: "b5xb2jqamodbb30rz1rm-mysql.services.clever-cloud.com",
  user: "ujzmctp0fehuj2f5",
  password: "BSCezw4nhu6difRneSpd",
  database: "b5xb2jqamodbb30rz1rm",
>>>>>>> origin/rama_sandraSosa
});

connection.connect();

module.exports = connection;
