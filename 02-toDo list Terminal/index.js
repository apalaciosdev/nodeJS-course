require('colors')

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer')
const { saveFile, readFile } = require('./helpers/modifyData')
const Task = require('./models/task')
const Tasks = require('./models/tasks')

console.clear()


const main = async() => {
  let opt = ''
  
  const tasks = new Tasks()


  tasksFile = readFile()

  if( tasksFile ){ //if json data file exists
    tasks.loadTasksFromArray(tasksFile)
  }
  
  

  do {
    //Show the menu
    opt = await inquirerMenu()
    
    switch (opt) {
      case '1':
        const desc = await readInput('Description: ')
        tasks.createTask(desc)
        break;
      
      case '2':
        tasks.listTasks()
        break;
      
      case '3':
        tasks.statusTasks(true)
        break;
      
      case '4':
        tasks.statusTasks(false)
        break;
    

    }

    saveFile( tasks.arrList )

    await pause()
    

  } while (opt !== '0');

}

main()