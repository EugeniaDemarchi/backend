var express = require("express");
var router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const connection = require("./../bbdd");
const fs = require("fs");
const path = require("path");


//consulta general
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
  //res.json({ data: results });
  res.render("1_listadoCursos", { data: results });
  });
});


//alta de producto

router.get("/alta", function (req, res, next) {
  res.render("2_formularioAlta");
});

router.post("/alta", upload.single("imagen"), async function (req, res, next) {
  let sentencia = `insert into materia (nombre, descripcion, publico, modalidad, imagen, duracion) values 
  ("${req.body.nombre}", "${req.body.descripcion}","${req.body.publico}","${req.body.modalidad}", "/imagenes/${req.file.originalname}", "${req.body.duracion}")`;

     let results = await connection.query(sentencia);
    fs.createReadStream("./uploads/" + req.file.filename).pipe(
       fs.createWriteStream("./public/imagenes/" + req.file.originalname),
       function (error) {}
     );
     res.render("finalizado", { mensaje: "Materia ingresada Exitosamente" });
   });



//modificar

router.get("/modificar/:id_materia", function (req, res, next) {
<<<<<<< HEAD
  connection.query(
    "SELECT * FROM materia where id_materia = " + req.params.id_materia,
=======
  connection.query("SELECT * FROM materia where id_materia = " + req.params.id_materia,
>>>>>>> origin/rama_sandraSosa
    function (error, results, fields) {
      if (error) throw error;
      res.render("3_formularioModificar", { data: results });
    }
  );
});

router.post("/modificar/:id_materia", upload.single("imagen"), async function (req, res, next) {
  console.log(req.body);
  let sentencia;
  if (req.file) {
    sentencia = `UPDATE materia SET 
      nombre = '${req.body.nombre}',
      descripcion = '${req.body.descripcion}',
      publico = '${req.body.publico}',
      modalidad = '${req.body.modalidad}',
      duracion = '${req.body.duracion}',
      imagen = '/imagenes/${req.file.originalname}' 
      WHERE id_materia = ${req.params.id_materia}`;

    fs.createReadStream("./uploads/" + req.file.filename)
      .pipe(fs.createWriteStream("./public/imagenes/" + req.file.originalname), function (error) {
        if (error) throw error;
      });
  } else {
    sentencia = `UPDATE materia SET 
      nombre = '${req.body.nombre}',
      descripcion = '${req.body.descripcion}',
      publico = '${req.body.publico}',
      modalidad = '${req.body.modalidad}', 
      duracion = '${req.body.duracion}' 
      WHERE id_materia = ${req.params.id_materia}`;
  }

  connection.query(sentencia, function (error, results, fields) {
    if (error) throw error;
    res.render("finalizado", { mensaje: "La materia fue modificada exitosamente" });
  });
});




//eliminar

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
        mensaje: "La materia fue eliminada exitosamente",
      });
    }
  );
});

module.exports = router;
