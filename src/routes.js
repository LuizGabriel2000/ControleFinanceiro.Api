const express = require('express')
const router = express.Router();


// Apartir desse momento o meu arquivo de rota enxerga o CarroController.js
const ReceitaController = require('./controllers/ReceitaController')

router.get('/chamar', ReceitaController.Chamar);
router.post('/enviar', ReceitaController.Enviar);

module.exports = router;