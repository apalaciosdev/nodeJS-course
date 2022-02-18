const { response } = require("express") //this helps VSC for code snippetsconst { response } = require("express") //this helps VSC for code snippets
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const { generateJWT } = require('../helpers/generateJWT')


const login = async(req, res = response ) => {

  const { mail, password} = req.body

  try {

    // Verify if mail exists
    const user = await User.findOne({ mail })
    if(!user){
      return res.status(400).json({
        msg: 'User/Password are not correct - mail'
      })
    }

    // Verify if user is active
    if(!user.state){
      return res.status(400).json({
        msg: 'User/Password are not correct - state: false'
      })
    }

    // Verify password
    const validPassword = bcrypt.compareSync(password, user.password)
    if(!validPassword){
      return res.status(400).json({
        msg: 'User/Password are not correct - password'
      })
    }

    // Generate JWT
    const token = await generateJWT(user.id)

    res.json({
      user,
      token
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      msg: 'Something was wrong'
    })
  }
}


module.exports = {
  login
}