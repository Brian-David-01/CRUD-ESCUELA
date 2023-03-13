"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _Asignaturas = _interopRequireDefault(require("../models/Asignaturas"));
var _Alumnos = _interopRequireDefault(require("../models/Alumnos"));
var _Profesor = _interopRequireDefault(require("../models/Profesor"));
var _response = require("express/lib/response");
var _alumnoController = require("../controllers/alumnoController");
var _asignaturaController = require("../controllers/asignaturaController");
var _profesorController = require("../controllers/profesorController");
var router = (0, _express.Router)();

// FUNCIONES DE ALUMNO DE LA CARPETA CONTROLLERS --> alumnoController
router.get("/", _alumnoController.renderAlumnos);
router.get("/agregarAlumnos", _alumnoController.agregarAlumnos);
router.post("/alumnos/agregar", _alumnoController.createAlumnos);
// router.get("/updateAlumnos/:id", renderEditAlumnos);
router.get("/alumnos/:id/update", _alumnoController.renderEditAlumnos);
router.post("/updateAlumnos/:id", _alumnoController.updateAlunnos);
// router.get("/deleteAlumnos/:id", deleteAlumnos);
router.get("/alumnos/:id/delete", _alumnoController.deleteAlumnos);
// router.get("/statusAlumno/:id", statusAlumno);
router.get("/alumnos/:id/status", _alumnoController.statusAlumno);

// FUNCIONES DE ASIGNATURAS DE LA CARPETA CONTROLLERS --> asignaturaController
router.get("/agregarAsignaturas", _asignaturaController.renderAsignaturas);
router.post("/asignaturas/agregar", _asignaturaController.createAsignaturas);
router.get("/update/:id", _asignaturaController.renderEditAsignaturas);
router.post("/update/:id", _asignaturaController.updateAsignaturas);
router.get("/delete/:id", _asignaturaController.deleteAsignaturas);
// STATUS ASIGNATURAS
router.get("/statusAsignatura/:id", _asignaturaController.statusAsignaturas);

// FUNCIONES DE PROFESORES DE LA CARPETA CONTROLLERS --> profesorController
// Se cambia en tablas y en archivo editar
router.get("/agregarProfesor", _profesorController.renderProfesores);
router.post("/profesores/agregar", _profesorController.createProfesores);
router.get("/update/:id", _profesorController.renderEditProfesores);
router.get("/updateProfesores/:id", _profesorController.updateProfesores2);
router.get("/delete/:id", _profesorController.deleteProfesores2);
router.post("/updateProfesores/:id", _profesorController.updateProfesores);
router.get("/deleteProfesores/:id", _profesorController.deleteProfesores);
// STATUS PROFESORES
router.get("/statusProfesor/:id", _profesorController.statusProfesores);
var _default = router;
exports["default"] = _default;