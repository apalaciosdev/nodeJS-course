const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../db/config')

class Server {

  constructor() {
    this.app = express()
    this.port = process.env.PORT

    this.usersPath = '/api/users'
    this.authPath = '/api/auth'

    //DB Connection
    this.dbConnect()

    //Middlewares
    this.middlewares()

    //Routes
    this.routes()
  }

  async dbConnect(){
    await dbConnection()
  }


  middlewares() {

    //CORS
    this.app.use(cors())

    //Read & Parse body
    this.app.use(express.json())

    //public directory
    this.app.use(express.static('public'))

  }

  routes() {
    this.app.use(this.authPath, require('../routes/auth'))
    this.app.use(this.usersPath, require('../routes/user'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port', this.port)
    })
  }

}


module.exports = Server