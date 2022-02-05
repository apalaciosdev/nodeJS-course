const {response} = require('express') //this helps VSC for code snippets


const usersGet = (req, res = response) => {
  res.json({
    msg: 'get API - controller'
  })
}

module.exports = {
  usersGet
}