const { response } = require('express')
const jwt = require('jsonwebtoken')

const validateJWT = ( req, res = response, next ) => { //data from headers

  const token = req.header('x-token')  //personalized name

  if(!token){
    return res.status(401).json({
      msg: 'There is not a token in the request'
    })
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY) //verify token

    req.uid = uid

    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({
      msg: 'Invalid token'
    })
  }

}

module.exports = {
  validateJWT
}
