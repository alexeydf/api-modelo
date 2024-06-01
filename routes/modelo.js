const express = require('express');
const router = express.Router();
const Modelo = require('../Models/Model');

router.get('/', (req, res) => { Modelo.teste(req, res) });

module.exports = router;