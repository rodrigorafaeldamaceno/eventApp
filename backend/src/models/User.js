const moongose = require('../database/mongo')

const UserSchema = moongose.Schema({
  email: String,
  pass: {
    type: String,
    select: false
  },
  type: Number,
})

module.exports = moongose.model('User', UserSchema)