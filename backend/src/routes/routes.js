const express = require('express')

const routes = express.Router()

const institutionController = require('../controllers/institutionController')
const userController = require('../controllers/userController')
const pessoaController = require('../controllers/pessoaController')

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


module.exports = routes