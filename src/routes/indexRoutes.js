import {Router} from "express";
import Asignaturas from "../models/Asignaturas";
import Alumnos from "../models/Alumnos";
import Profesores from '../models/Profesor';
import { redirect } from "express/lib/response";
import { agregarAlumnos, createAlumnos, deleteAlumnos, renderAlumnos, renderEditAlumnos, statusAlumno, updateAlunnos } from "../controllers/alumnoController";
import { createAsignaturas, deleteAsignaturas, renderAsignaturas, renderEditAsignaturas, statusAsignaturas, updateAsignaturas } from "../controllers/asignaturaController";
import { createProfesores, deleteProfesores, deleteProfesores2, renderEditProfesores, renderProfesores, statusProfesores, updateProfesores, updateProfesores2 } from "../controllers/profesorController";

const router = Router();

// FUNCIONES DE ALUMNO DE LA CARPETA CONTROLLERS --> alumnoController
router.get("/", renderAlumnos);
router.get("/agregarAlumnos", agregarAlumnos);
router.post("/alumnos/agregar", createAlumnos);
// router.get("/updateAlumnos/:id", renderEditAlumnos);
router.get("/alumnos/:id/update", renderEditAlumnos);
router.post("/updateAlumnos/:id", updateAlunnos);
// router.get("/deleteAlumnos/:id", deleteAlumnos);
router.get("/alumnos/:id/delete", deleteAlumnos);
// router.get("/statusAlumno/:id", statusAlumno);
router.get("/alumnos/:id/status", statusAlumno);

// FUNCIONES DE ASIGNATURAS DE LA CARPETA CONTROLLERS --> asignaturaController
router.get("/agregarAsignaturas", renderAsignaturas);
router.post("/asignaturas/agregar", createAsignaturas);
router.get("/update/:id", renderEditAsignaturas);
router.post("/update/:id", updateAsignaturas)
router.get("/delete/:id", deleteAsignaturas)
// STATUS ASIGNATURAS
router.get("/statusAsignatura/:id", statusAsignaturas)

// FUNCIONES DE PROFESORES DE LA CARPETA CONTROLLERS --> profesorController
// Se cambia en tablas y en archivo editar
router.get("/agregarProfesor", renderProfesores);
router.post("/profesores/agregar", createProfesores);
router.get("/update/:id", renderEditProfesores);
router.get("/updateProfesores/:id", updateProfesores2);
router.get("/delete/:id", deleteProfesores2)
router.post("/updateProfesores/:id", updateProfesores)
router.get("/deleteProfesores/:id", deleteProfesores)
// STATUS PROFESORES
router.get("/statusProfesor/:id", statusProfesores)

export default router;