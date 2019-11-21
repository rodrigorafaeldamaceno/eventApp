const mongoose = require('mongoose');

const AtividadeSchema = mongoose.Schema({
  titulo: String,
  descricao: String,
  inicio: Date,
  fim: Date,
  valor: Number,
  cargaHoraria: Number,
  local: String,
  tipoAtividade: String,
  evento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Evento'
  }
})

module.exports = mongoose.model('Atividade', AtividadeSchema)