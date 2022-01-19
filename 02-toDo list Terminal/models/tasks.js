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


  readTasksFromArray( tasks = [] ){
    //sacar tarea.id
    const idTasks= []

    tasks.forEach(element => {
      idTasks.push(element.id)
    });



    return idTasks.forEach(element => {
      console.log(element)
    });

  }


  createTask( desc = '' ){
    const task = new Task(desc)

    this._list[task.id] = task
  }
}

module.exports = Tasks








