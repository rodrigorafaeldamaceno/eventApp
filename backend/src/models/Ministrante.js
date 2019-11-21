const mongoose = require('../database/mongo')

const MinistranteSchema = mongoose.Schema({
  titulacao: String,
  descricao: String,
  pessoa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pessoa'
  }
})

module.exports = mongoose.model('Ministrante', MinistranteSchema)