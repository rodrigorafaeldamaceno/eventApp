const mongoose = require('../database/mongo')

const EventoSchema = mongoose.Schema({
  dataInicio: Date,
  dataTermino: Date,
  descricao: String,
  logo: String,
  local: String,
  instituicao: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instituicao'
  }
})

module.exports = mongoose.model('Evento', EventoSchema)