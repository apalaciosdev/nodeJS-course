const inquirer = require("inquirer")
require("colors")

const menuOpts = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [
      {
        value: "1",
        name: `${'1.-'.green} Create toDo`,
      },
      {
        value: "2",
        name: `${'2.-'.green} Show toDos`,
      },
      {
        value: "3",
        name: `${'3.-'.green} Show completed toDos`,
      },
      {
        value: "4",
        name: `${'4.-'.green} Show pending toDos`,
      },
      {
        value: "5",
        name: `${'5.-'.green} Complete toDo(s)`,
      },
      {
        value: "6",
        name: `${'6.-'.green} Delete toDo`,
      },
      {
        value: "0",
        name: `${'0.-'.green} Exit`,
      },
    ],
  },
]



const inquirerMenu = async () => {
  console.clear()

  console.log("====================".green)
  console.log("  Select an option  ".green)
  console.log("====================\n".green)

  const { option } = await inquirer.prompt(menuOpts)
  return option
}



const pause = async () => {
  const question = [{ type: "input", name: "enter", message: `\nPress ${'ENTER'.green} to continue\n` }]

  await inquirer.prompt(question)
}



const readInput = async ( message ) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate( value ){
        if( value.length === 0 ){
          return 'Please, enter something'
        }
        return true
      }
    }
  ]

  const { desc } = await inquirer.prompt(question)
  return desc
}


module.exports = {
  inquirerMenu,
  pause,
  readInput
}
