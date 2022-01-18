require('colors')

const showMenu = () => {

  return new Promise( resolve => {
    
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
      resolve(opt)//promise's resolve
    })
  })

}



const pause = () => {

  return new Promise( resolve => {

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question(`\nPress ${'ENTER'.green} to continue\n`, (opt) => {
      readline.close()
        resolve(opt)//promise's resolve
    })
  })

}



module.exports = {
  showMenu,
  pause
}