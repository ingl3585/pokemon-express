const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const pokemonController = require('./controllers/pokemonController');

app.use('/pokemon', pokemonController);

app.listen(process.env.PORT, () => {
	console.log('We live');
});
