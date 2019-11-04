const User = require('../models/User')

module.exports = {
  async store(req, res) {
    const { email, pass } = req.body

    let user = await User.findOne({ email })

    if (!user) user = await User.create({ email, pass })

    return res.json(user)

  },
  async index(req, res) {
    const user = await User.find()
    return res.json(user)
  },
  async show(req, res) {
    const { email } = req.headers

    const user = await User.findOne({ email })
    if (!user)
      return res.status(401).json({ error: 'Usuário não existe' })

    return res.json(user)
  },
  async update(req, res) {


  },
  async delete(req, res) { }
}