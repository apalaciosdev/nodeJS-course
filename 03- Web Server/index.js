
const http = require('http')


http.createServer( (req, res) => {
  res.write('hola')
  res.end()
})
.listen(8080)


