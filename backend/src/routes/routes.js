const express = require('express')

const routes = express.Router()

const institutionController = require('../controllers/institutionController')
const userController = require('../controllers/userController')
const pessoaController = require('../controllers/pessoaController')
const eventoController = require('../controllers/EventoController')
const MinistranteController = require('../controllers/MinistranteController')
const AtividadeController = require('../controllers/AtividadeController')
const PacoteController = require('../controllers/PacoteControleler')


routes.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

//Institution
routes.post('/instituicao', institutionController.store)
routes.get('/instituicao/', institutionController.index)
routes.get('/instituicao/:id', institutionController.show)
routes.put('/instituicao/', institutionController.update)
routes.delete('/instituicao/:id', institutionController.delete)

//User
routes.post('/user/', userController.store)
routes.get('/users/', userController.index)
routes.get('/user/', userController.show)
routes.put('/user/', userController.update)
routes.delete('/user/:id', userController.delete)

//Pessoa
routes.post('/pessoa', pessoaController.store)
routes.get('/pessoa', pessoaController.index)
//routes.post('/pessoa', pessoaController.show)

// Evento
routes.post('/evento/:instituicao_id', eventoController.store)
routes.get('/evento/', eventoController.index)
routes.get('/evento/:id', eventoController.show)
routes.delete('/evento/:id', eventoController.delete)

// Atividade
routes.post('/atividade/:evento_id', AtividadeController.store)
routes.get('/atividade/', AtividadeController.index)
routes.get('/atividade/:id', AtividadeController.show)
routes.delete('/atividade/:id', AtividadeController.delete)

// Ministrante
routes.post('/ministrante/:instituicao_id', MinistranteController.store)
routes.get('/ministrante/', MinistranteController.index)
routes.get('/ministrante/:id', MinistranteController.show)
routes.delete('/ministrante/:id', MinistranteController.delete)

// Atividade
routes.post('/pacote/', PacoteController.store)
routes.get('/pacote/', PacoteController.index)
routes.get('/pacote/:id', PacoteController.show)
routes.delete('/pacote/:id', PacoteController.delete)



module.exports = routes