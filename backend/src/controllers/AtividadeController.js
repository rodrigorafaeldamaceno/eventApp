const Atividade = require('../models/Atividade')
const Evento = require('../models/Evento')


module.exports = {
  async store(req, res) {
    const { titulo, descricao, inicio, fim, valor, cargaHoraria, local, tipoAtividade } = req.body
    const { evento_id } = req.params

    const evento = await Evento.findById(evento_id)

    if (!evento)
      return res.status(403).json({ error: 'Event does not exist' })

    const atividade = await Atividade.create({
      titulo,
      descricao,
      inicio,
      fim,
      valor,
      cargaHoraria,
      local,
      tipoAtividade,
      evento: evento_id
    })

    // atividade.populate('evento').execPopulate()

    return res.json(atividade)
  },
  async index(req, res) {
    const atividades = await Atividade.find().populate('evento').exec()

    return res.json(atividades)
  },
  async show(req, res) {
    const { id } = req.params

    const atividade = await Atividade.findById(id).populate('evento').exec()

    return res.json(atividade)
  },
  async update(req, res) {


  },
  async delete(req, res) { }
}