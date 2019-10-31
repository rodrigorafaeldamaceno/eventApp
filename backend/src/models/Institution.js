const moongose = require('../database/mongo')

const InstitutionSchema = moongose.Schema({
  name: String,
  cnpj: String
})

module.exports = moongose.model('Institution', InstitutionSchema)