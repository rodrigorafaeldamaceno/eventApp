const moongose = require('../database/mongo')

const InscricaoSchema = moongose.Schema({

  valida: Boolean,
  pessoa: {
    type: moongose.Schema.Types.ObjectId, ref: 'Pessoa'
  },
  atividades: [{
    type: moongose.Schema.Types.ObjectId, ref: 'Atividade'
  }],
  pacote: [{
    type: moongose.Schema.Types.ObjectId, ref: 'Pacote'
  }],

})

module.exports = moongose.model('Inscricao', InscricaoSchema)