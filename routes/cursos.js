var express = require("express");
var router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const connection = require("./../bbdd");
const fs = require("fs");

router.get("/", function (req, res, next) {
  connection.query("SELECT * FROM materia;", function (error, results, fields) {
    if (error) throw error;
    // res.json({ data: results });
    res.render("index", { data: results });
  });

  // connection.end();
});

/*Dashboard de cursos*/
router.get("/listado/", function (req, res, next) {
  if (req.query.id_materia) {
    sentencia =
      "select * from materia where id_materia= " + req.query.id_materia;
  } else {
    sentencia = "select * from materia";
  }
  connection.query(sentencia, function (error, results, fields) {
    if (error) throw error;
    res.render("1_listadoCursos", { data: results });
  });
});

router.get("/listado/", function (req, res, next) {
  connection.query("SELECT * FROM materia;", function (error, results, fields) {
    if (error) throw error;
    // res.json({ data: results });
    res.render("1_listadoCursos", { data: results });
  });
});

router.get("/alta", function (req, res, next) {
  res.render("2_formularioAlta");
});

router.post("/alta", upload.single("imagen"), async function (req, res, next) {
  let sentencia = `insert into materia (nombre, descripcion, destinado_a, modalidad, imagen, duracion) values 
  ("${req.body.nombre}", "${req.body.descripcion}","${req.body.destinado_a}","${req.body.modalidad}", "/imagenes/${req.file.originalname}", "${req.body.duracion}")`;

  let results = await connection.query(sentencia);

  fs.createReadStream("./uploads/" + req.file.filename).pipe(
    fs.createWriteStream("./public/imagenes/" + req.file.originalname),
    function (error) {}
  );
  res.render("finalizado", { mensaje: "Producto Ingresado Exitosamente" });
});

router.get("/modificar/:id_materia", function (req, res, next) {
  connection.query(
    "SELECT * FROM tpartevivo.materia where id_materia = " +
      req.params.id_materia,
    function (error, results, fields) {
      if (error) throw error;
      // res.json({ data: results });
      res.render("3_formularioModificar", { data: results });
    }
  );
});

router.post(
  "/modificar/:id_materia",
  upload.single("imagen"),
  async function (req, res, next) {
    let sentencia;
    if (req.file) {
      sentencia = `update materia
      set nombre= '${req.body.nombre}',
      descripcion= '${req.body.descripcion}',
      destinado_a= '${req.body.destinado_a}',
      modalidad= '${req.body.modalidad}',
      imagen= '/imagenes/${req.file.originalname}', 
      duracion= '${req.body.duracion}' where id_materia=${req.params.id_materia}`;
      fs.createReadStream("./uploads/" + req.file.filename).pipe(
        fs.createWriteStream("./public/imagenes/" + req.file.originalname),
        function (error) {}
      );
    } else {
      sentencia = `update materia 
      set nombre = '${req.body.nombre}',
      descripcion= '${req.body.descripcion}',
      destinado_a = '${req.body.destinado_a}',
      modalidad= '${req.body.modalidad}', 
      duracion = '${req.body.duracion}' where id_materia=${req.params.id_materia}`;
    }
    connection.query(sentencia, function (error, results, fields) {
      if (error) throw error;
      // res.json({ data: results });
      res.render("finalizado", {
        mensaje: "El producto fue modificado exitosamente",
      });
    });
  }
);

router.get("/eliminar/:id_materia", function (req, res, next) {
  connection.query(
    "SELECT * FROM materia where id_materia = " + req.params.id_materia,
    function (error, results, fields) {
      if (error) throw error;
      // res.json({ data: results });
      res.render("4_formularioEliminar", { data: results });
    }
  );
});

router.post("/eliminar/:id_materia", function (req, res, next) {
  connection.query(
    "delete FROM materia where id_materia = " + req.params.id_materia,
    function (error, results, fields) {
      if (error) throw error;
      // res.json({ data: results });
      res.render("finalizado", {
        mensaje: "El producto fue eliminado exitosamente",
      });
    }
  );
});

module.exports = router;
