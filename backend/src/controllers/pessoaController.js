const Pessoa = require('../models/Pessoa')

module.exports = {
  async store(req, res) {
    const { nome, cpf, passaporte, estrangeiro, user } = req.body

    const pessoa = await Pessoa.create({ nome, cpf, passaporte, estrangeiro, user })

    await pessoa.populate('user').execPopulate()
    return res.json(pessoa)
  },
  async index(req, res) {
    const pessoas = await Pessoa.find()

    return res.json(pessoas)
  },
  async show(req, res) {
    const { cpf } = req.body

    const pessoa = Pessoa.findOne({ cpf })
    if (!pessoa) return res.status(401).json({ error: 'Pessoa não encontrada' })

    return res.json(pessoa)
  },
  async update(req, res) {

  },
  async delete(req, res) { }
}