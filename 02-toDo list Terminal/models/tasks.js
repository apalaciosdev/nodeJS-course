/**
 *  _list:
 *      { 'uuid-1213414-31-4: {id:12, descr: 'example, completedOn: a date}},
 *      { 'uuid-1367514-33-3: {id:13, descr: 'example, completedOn: a date}},
 */

const Task = require('./task')


class Tasks {
  
  _list = {}

  constructor(){
    this._list = {}
  }

  createTask( desc = '' ){
    const task = new Task(desc)

    this._list[task.id] = task
  }
}

module.exports = Tasks








