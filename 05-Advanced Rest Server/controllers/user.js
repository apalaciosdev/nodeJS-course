const { response } = require("express") //this helps VSC for code snippets
const bcrypt = require('bcryptjs')
const User = require('../models/user')


const usersGet = (req, res = response) => {
  const query = req.query   //http://localhost:2022/api/users?q=hola&name=aaron&apikey=35245234  ->  query params
  const { q, name = 'No name', apikey } = req.query

  res.json({
    msg: "get API - controller",
    q,
    name,
    apikey
  })
}


const usersPost = async(req, res = response) => {

  const { name, mail, password, role } = req.body
  const user = new User({ name, mail, password, role })

  // Encrypt password
  const salt = bcrypt.genSaltSync()
  user.password = bcrypt.hashSync(password, salt)

  // Save in DB
  await user.save()

  res.json({
    user
  })
}

const usersPut = (req, res = response) => {

  //const id = req.params.id    //ex: http://localhost:2022/api/users/10   ->  id = 10
  const { id } = req.params

  res.json({
    msg: "put API - controller",
    id
  })
}

const usersPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controller",
  })
}

const usersDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controller",
  })
}

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete,
}
