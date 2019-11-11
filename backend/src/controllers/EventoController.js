const Evento = require('../models/Evento')
const Instituicao = require('../models/Instituicao')
module.exports = {
  async store(req, res) {
    const { instituicao_id } = req.params
    const { dataInicio, dataTermino, descricao, logo, local } = req.body

    const instituicao = await Instituicao.findById(instituicao_id)

    if (!instituicao) return res.status(403).json('Instituiçãonão encontrada')

    const evento = await Evento.create({
      dataInicio,
      dataTermino,
      descricao,
      logo,
      local,
      instituicao: instituicao_id
    })

    res.json(evento)
  },
  async index(req, res) {
    const eventos = await Evento.find().populate('instituicao').exec()

    return res.json(eventos)
  },
  async show(req, res) {
    const { id } = req.params

    const evento = await Evento.findById(id)

    await evento.populate('instituicao').execPopulate()

    return res.json(evento)
  },
  async update(req, res) {
    const { id } = req.params

    const { dataInicio, dataTermino, descricao, logo, local } = req.body


    const evento = await Evento.findById(id)

    if (!evento)
      return res.status(403).json({ error: 'Evento não encontrado' })

    evento.dataInicio = dataInicio
    evento.dataTermino = dataTermino
    evento.descricao = descricao
    evento.logo = logo
    evento.local = local
    evento.instituicao = instituicao_id

    evento.save()

    await evento.populate('instituicao').execPopulate()

    return res.json(evento)

  },
  async delete(req, res) {
    const { id } = req.params

    const evento = await Evento.findByIdAndDelete(id)

    return res.json(evento)
  }
}