"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfesores2 = exports.updateProfesores = exports.statusProfesores = exports.renderProfesores = exports.renderEditProfesores = exports.deleteProfesores2 = exports.deleteProfesores = exports.createProfesores = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Profesor = _interopRequireDefault(require("../models/Profesor"));
var renderProfesores = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var profesores;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Profesor["default"].find().lean();
        case 2:
          profesores = _context.sent;
          res.render("agregarProfesor", {
            profesores: profesores
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderProfesores(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.renderProfesores = renderProfesores;
var createProfesores = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var profesores;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          profesores = (0, _Profesor["default"])(req.body);
          _context2.next = 4;
          return profesores.save();
        case 4:
          res.redirect("/agregarProfesor");
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function createProfesores(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createProfesores = createProfesores;
var renderEditProfesores = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var profesores;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _Profesor["default"].findById(req.params.id).lean();
        case 3:
          profesores = _context3.sent;
          res.render("editar", {
            profesores: profesores
          });
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.message);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function renderEditProfesores(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.renderEditProfesores = renderEditProfesores;
var updateProfesores = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return _Profesor["default"].findByIdAndUpdate(id, req.body);
        case 3:
          res.redirect("/agregarProfesor");
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateProfesores(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateProfesores = updateProfesores;
var updateProfesores2 = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var profesores;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _Profesor["default"].findById(req.params.id).lean();
        case 3:
          profesores = _context5.sent;
          res.render("editarProfesores", {
            profesores: profesores
          });
          _context5.next = 10;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0.message);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function updateProfesores2(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateProfesores2 = updateProfesores2;
var deleteProfesores = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.next = 3;
          return _Profesor["default"].findByIdAndDelete(id);
        case 3:
          res.redirect("/agregarProfesor");
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function deleteProfesores(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteProfesores = deleteProfesores;
var deleteProfesores2 = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.next = 3;
          return _Profesor["default"].findByIdAndDelete(id);
        case 3:
          res.redirect("/agregarProfesor");
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function deleteProfesores2(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.deleteProfesores2 = deleteProfesores2;
var statusProfesores = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var id, profesores;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          _context8.next = 3;
          return _Profesor["default"].findById(id);
        case 3:
          profesores = _context8.sent;
          // Opción esta en model
          profesores.opcion = !profesores.opcion;
          _context8.next = 7;
          return profesores.save();
        case 7:
          res.redirect("/agregarProfesor");
        case 8:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function statusProfesores(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.statusProfesores = statusProfesores;