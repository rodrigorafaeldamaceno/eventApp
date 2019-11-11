const mongoose = require('../database/mongo')

const MinistranteSchema = mongoose.Schema({
  titulacao: String,
  descricao: String,
  pessoa: {
    types: mongoose.Schema.Types.ObjectId,
    ref: 'Pessoa'
  }
})

module.exports = mongoose.model('Ministrante', MinistranteSchema)