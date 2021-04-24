const express = require('express');
const router = express.Router();
const matsyaController = require('../controller/matsya-controller');

router.get('/consultarAlumno', matsyaController.obtenerAlumno);