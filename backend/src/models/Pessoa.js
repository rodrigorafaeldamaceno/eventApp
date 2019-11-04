const moongose = require('../database/mongo')

const PessoaSchema = moongose.Schema({
  nome: String,
  cpf: String,
  passaporte: String,
  estrangeiro: Boolean,
  user: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = moongose.model('Pessoa', PessoaSchema)