const express = require('express')
const app = express()
const port = 8080

//Static content
app.use( express.static('./public') )



app.get('/hello', (req, res) => {
  res.send('Hello world')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log('Server running on port', port)
})

