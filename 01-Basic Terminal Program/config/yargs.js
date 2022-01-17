const argv = require('yargs')
              .options({
                't': {
                alias: 'table',
                type: 'number',
                demandOption: 'true', //required param
                describe: "Multiplication table base"
                },
                'l': {
                  alias: 'listTable',
                  type: 'boolean',
                  default: false,
                  describe: "List multiplication table"
                },
                'u': {
                  alias: 'until',
                  type: 'number',
                  default: '10',
                  describe: " Until what number to multiply"
                }
              })

              .check( (argv, options) => {
                if(isNaN(argv.t)){
                  throw 'Table should be a number'
                }
                if(isNaN(argv.u)){
                  throw 'Until should be a number'
                }
                return true
              })
              .argv



module.exports = argv