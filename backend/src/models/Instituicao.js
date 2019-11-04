const moongose = require('../database/mongo')

const InstitutionSchema = moongose.Schema({
  nome: String,
  cnpj: String
})

module.exports = moongose.model('Instituicao', InstitutionSchema)