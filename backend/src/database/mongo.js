require('dotenv').config()

const mongoose = require('mongoose')
const { username, password, database, host } = require('../../config/mongo')

/*
// Atlas
mongoose.connect(`mongodb+srv://${user}:${pass}@tindevcluster-gxzea.mongodb.net/${database}?retryWrites=true&w=majority`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

//functions deprecation
mongoose.set('useFindAndModify', false);
*/

// local
module.exports = mongoose.connect(`mongodb://${host}/${database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose