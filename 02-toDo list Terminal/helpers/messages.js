require('colors')

const showMenu = () => {
  console.clear()

  console.log('===================='.green)
  console.log('  Select an option  '.green)
  console.log('====================\n'.green)

  console.log(`${'1.-'.green} Create toDo`)
  console.log(`${'2.-'.green} Show toDos`)
  console.log(`${'3.-'.green} Show completed toDos`)
  console.log(`${'4.-'.green} Show pending toDos`)
  console.log(`${'5.-'.green} Complete toDo(s)`)
  console.log(`${'6.-'.green} Delete toDo`)
  console.log(`${'0.-'.green} Exit \n`)


  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question('Select an option: ', (opt) => {
    readline.close()
  })
}



const pause = () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`\nPress ${'ENTER'.green} to continue\n`, (opt) => {
    readline.close()
  })
}



module.exports = {
  showMenu,
  pause
}