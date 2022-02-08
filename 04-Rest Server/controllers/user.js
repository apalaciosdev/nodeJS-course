const { response } = require("express") //this helps VSC for code snippets

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

const usersPost = (req, res = response) => {

  //const body = req.body
  const {name, age} = req.body

  res.json({
    msg: "post API - controller",
    name,
    age
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
