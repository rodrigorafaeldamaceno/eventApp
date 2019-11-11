const Ministrante = require('../models/Ministrante')

module.exports = {
  async store(req, res) {
    const { pessoa_id } = req.params
    const { titulacao, descricao } = req.body

    const ministrante = await Ministrante.create({ titulacao, descricao, pessoa: pessoa_id })

    return res.json(ministrante)
  },
  async index(req, res) {
    const ministrantes = await Ministrante.find().populate('pessoa').exec()

    return res.json(ministrantes)
  },
  async show(req, res) {
    const { id } = req.params

    const ministrante = await Ministrante.findById(id).populate('pessoa').exec()

    return res.json(ministrante)
  },
  async update(req, res) {


  },
  async delete(req, res) {
    const { id } = req.params

    const ministrante = await Ministrante.findByIdAndDelete(id).populate('pessoa').exec()

    return res.json(ministrante)
  }
}