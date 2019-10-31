const Institution = require('../models/Institution')

module.exports = {
  async store(req, res) {
    const { name, cnpj } = req.body

    const institution = await Institution.create({
      name,
      cnpj
    })

    return res.json(institution)
  },
  async index(req, res) {
    const institutions = await Institution.find()

    return res.json(institutions)
  },
  async show(req, res) {
    const { id } = req.params
    const institution = await Institution.findById(id)

    res.json(institution)
  },
  async update(req, res) {

    console.log(req.body)
    const { id, name, cnpj } = req.body

    const institution = await Institution.findById(id)

    if (!institution)
      return res.status(501).json({ error: 'Institution not found' })

    institution.name = name
    institution.cnpj = cnpj
    institution.save()

    return res.json(institution)
  },
  async delete(req, res) { }
}