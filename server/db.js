const mongoose = require('mongoose')

require('./schema/info')
require('./schema/student')

const dbPath = 'mongodb://localhost:27017/test'

const db = () => {
      mongoose.set('debug', true)

      mongoose.connect(dbPath, {
            useNewUrlParser: true
      })

      mongoose.connection.on('open', async () => {
            console.log('Connected to MongoDB ', dbPath)
      })

      mongoose.connection.on('error', err => {
            console.error(err)
      })

      mongoose.connection.on('disconnected', () => {
            mongoose.connect(dbPath, {
                  useNewUrlParser: true
            })
      })
}

module.exports = {
      db
}