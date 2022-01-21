const { createTable } = require('./helpers/multiply')
const argv = require('./config/yargs')


createTable(argv.table, argv.listTable, argv.until)
  .then( createdFile => console.log(createdFile, "created!") )
  .catch( err => console.log(err) )