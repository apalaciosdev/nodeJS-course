const { createTable } = require('./helpers/multiply')
const argv = require('yargs')
              .option('t', {
                alias: 'table',
                type: 'number',
                demandOption: 'true' //required param
              })
              .option('l', {
                alias: 'listTable',
                type: 'boolean',
                default: false
              })
              .check( (argv, options) => {
                if(isNaN(argv.t)){
                  throw 'Table should be a number'
                }
                return true
              })
              .argv


//console.log( argv )

//console.log('table: yargs', argv.table) 

//const table = 2



createTable(argv.table, argv.listTable)
  .then( createdFile => console.log(createdFile, "created!") )
  .catch( err => console.log(err) )