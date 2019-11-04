const Instituicao = require('../models/Instituicao')

module.exports = {
  async store(req, res) {
    const { nome, cnpj } = req.body

    const instituicao = await Instituicao.create({
      nome,
      cnpj
    })

    return res.json(instituicao)
  },
  async index(req, res) {
    const instituicoes = await Instituicao.find()

    return res.json(instituicoes)
  },
  async show(req, res) {
    const { id } = req.params
    const instituicao = await Instituicao.findById(id)

    res.json(instituicao)
  },
  async update(req, res) {

    console.log(req.body)
    const { id, nome, cnpj } = req.body

    const instituicao = await Instituicao.findById(id)

    if (!instituicao)
      return res.status(501).json({ error: 'Institution not found' })

    instituicao.nome = nome
    instituicao.cnpj = cnpj
    instituicao.save()

    return res.json(instituicao)
  },
  async delete(req, res) { }
}