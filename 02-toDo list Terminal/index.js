require('colors')

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer')
const Task = require('./models/task')
const Tasks = require('./models/tasks')

console.clear()


const main = async() => {
  let opt = ''
  
  const tasks = new Tasks()
  
  do {
    //Show the menu
    opt = await inquirerMenu()
    
    switch (opt) {
      case '1':
        const desc = await readInput('Description: ')
        tasks.createTask(desc)
        break;
      
      case '2':
        console.log(tasks.arrList)
        break;
    

    }

    await pause()
    

  } while (opt !== '0');

}

main()