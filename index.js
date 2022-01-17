const { createTable } = require('./helpers/multiply')


const table = 3

createTable(table)
  .then( createdFile => console.log(createdFile, "created!") )
  .catch( err => console.log(err) )