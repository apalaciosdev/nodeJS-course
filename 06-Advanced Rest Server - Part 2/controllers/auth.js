const { response } = require("express") //this helps VSC for code snippetsconst { response } = require("express") //this helps VSC for code snippets

const login = (req, res = response ) => {

  res.json({
    msg: 'login ok'
  })

}


module.exports = {
  login
}