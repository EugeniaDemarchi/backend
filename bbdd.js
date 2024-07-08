const usuarios = {
  usuario1: {
    user: "367907_euge",
    password: "Euge-1234",
  },
  usuario2: {
    user: "367907_sandra",
    password: "Sandra-1234",
  },
  usuario3: {
    user: "367907_lilia",
    password: "Lilia-1234",
  },
  usuario4: {
    user: "367907_docente",
    password: "Docente-1234",
  },
  
};

const selectedUser = "usuario1"; 
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "mysql-sosasandramabel.alwaysdata.net",
  user: usuarios[selectedUser].user,
  password: usuarios[selectedUser].password,
  database: "sosasandramabel_tpartevivo",
});

connection.connect();

module.exports = connection;
