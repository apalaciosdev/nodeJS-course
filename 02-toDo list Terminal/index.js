require('colors')

const { showMenu, pause } = require('./helpers/messages')

console.clear()


const main = async() => {
  console.log('Hola mundo')
  showMenu()
  pause()
}

main()