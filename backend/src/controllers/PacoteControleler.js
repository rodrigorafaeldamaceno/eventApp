const Pacote = require('../models/Pacote')

module.exports = {
  async store(req, res) {

    const { titulo, descricao, valor, obrigatorio, atividades } = req.body

    const pacote = await Pacote.create({
      titulo, descricao, valor, obrigatorio, atividades
    })

    await pacote.populate('pacote').execPopulate()

    return res.json(pacote)
  },
  async index(req, res) {
    const pacotes = await Pacote.find().populate('pessoa').populate('atividades').exec()

    return res.json(pacotes)
  },
  async show(req, res) {
    const { id } = req.params

    const pacote = await Pacote.findById(id).populate('atividade').exec()

    return res.json(pacote)
  },
  async update(req, res) {

  },
  async delete(req, res) {
    const { id } = req.params

    const pacote = await Pacote.findByIdAndDelete(id).populate('atividade').exec()

    return res.json(pacote)
  }
}