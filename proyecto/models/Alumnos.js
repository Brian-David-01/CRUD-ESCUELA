"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var alumnoEsquema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  paterno: {
    type: String,
    required: true
  },
  fechaNac: {
    type: Date
  },
  materno: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  celular: {
    type: Number,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  opcion: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
// Se crea el modelo de datos como quiero que se llame la collection
var _default = (0, _mongoose.model)("Alumno", alumnoEsquema);
exports["default"] = _default;