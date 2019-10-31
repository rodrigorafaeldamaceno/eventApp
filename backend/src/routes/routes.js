const express = require('express')

const routes = express.Router()

const institutionController = require('../controllers/institutionController')

routes.get('/', (req, res) => {
  res.json({ status: 'ok' })
})


//Institution
routes.post('/institution', institutionController.store)
routes.get('/institution/', institutionController.index)
routes.get('/institution/:id', institutionController.show)
routes.put('/institution/', institutionController.update)
routes.delete('/institution/:id', institutionController.delete)

module.exports = routes