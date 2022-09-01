const express = require('express')
const router = express.Router();



const ReceitaController = require('./controllers/ReceitaController')
const DespesaController = require('./controllers/DespesaController')

router.get('/receita/chamar', ReceitaController.Chamar);
router.get('/receita/chamar/id/:id', ReceitaController.Id)
router.post('/receita/enviar', ReceitaController.Enviar);
router.put('/receita/editar/:id' ,ReceitaController.Editar);
router.delete('/receita/deletar/:id', ReceitaController.Delete);

router.get('/despesa/chamar', DespesaController.Chamar);
router.get('/receita/chamar/id/:id', DespesaController.Id)
router.post('/despesa/enviar', DespesaController.Enviar);
router.put('/despesa/editar/:id' ,DespesaController.Editar);
router.delete('/despesa/deletar/:id', DespesaController.Delete);
module.exports = router;                             