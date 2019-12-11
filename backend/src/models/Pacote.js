const moongose = require('../database/mongo')

const PacoteSchema = moongose.Schema({

  titulo: String,
  descricao: String,
  valor: Number,
  obrigatorio: Boolean,
  atividades: [{
    type: moongose.Schema.Types.ObjectId, ref: 'Atividade'
  }],
})

module.exports = moongose.model('Pacote', PacoteSchema)