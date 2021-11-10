const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon-data');

// Array of objects

router.get('/', (req, res) => {
	res.json(pokemon);
});

// Object

router.get('/:id', (req, res) => {
	console.log(req.params.id);
	res.json(pokemon[req.params.id - 1]);
});

// Deleted object

router.delete('/:id', (req, res) => {
	pokemon.splice(req.params.id - 1, 1);
	res.json(pokemon);
});

// Create Object

router.post('/', (req, res) => {
	console.log('hitting post');
	console.log('req.body', req.body);
	pokemon.push(req.body);
	res.json(pokemon);
});

// Updated Object

router.put('/:id', (req, res) => {
	pokemon[req.params.id - 1] = req.body;
	res.json(pokemon);
});

module.exports = router;
