/**
 *  _list:
 *      { 'uuid-1213414-31-4: {id:12, descr: 'example, completedOn: a date}},
 *      { 'uuid-1367514-33-3: {id:13, descr: 'example, completedOn: a date}},
 */

const Task = require('./task')


class Tasks {
  
  _list = {}


  get arrList(){
    const list = []
    Object.keys(this._list).forEach( key => {
      const task = this._list[key]
      list.push(task)
    })

    return list
  }


  constructor(){
    this._list = {}
  }


  loadTasksFromArray( tasks = [] ){

    tasks.forEach(task => {
      this._list[task.id] = task
    });

  }


  createTask( desc = '' ){
    const task = new Task(desc)

    this._list[task.id] = task
  }


  listTasks(){
    console.log()
    return this.arrList.map(({desc, completedOn}, index) => {
      index++
      console.log(`${index}.`.green , `${desc} :: ${completedOn ? "Completed".green : "Incomplete".red}`)
    })
  }
  
  
  statusTasks( isCompleted = true){
    console.log()
    let counter = 0
    return this.arrList.map(({desc, completedOn}) => {
      
      if(isCompleted){
        counter+=1
        { completedOn ?  console.log(`${counter}.`.green , `${desc} :: ${completedOn ? completedOn : ""}`) : '' }
      }
      
      else{
        counter+=1
        { !completedOn ?  console.log(`${counter}.`.green , `${desc}`) : '' }
      }
    })
  }
}

module.exports = Tasks








