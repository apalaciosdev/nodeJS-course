const fs = require('fs')
const colors = require('colors')

const createTable = async(table=1, listTable=false, until=10) => {

  try {
    let data = ''
  
    
    for (let i = 1; i <= until; i++) {
      let result = table*i
      
      data += `${table} x ${i} = ${result}\n`
    }
    
    if(listTable){
      console.clear()
      console.log('--------'.rainbow)
      console.log('Table ' + table)
      console.log('--------'.rainbow)
      console.log(data)
    }
    
    fs.writeFileSync(`./table_files/table-${table}.txt`, data)
    console.log(`The file table-${table}.txt has been created!`.yellow);
  
    return `tabla-${table}.txt`
    
  } catch (err) {
    throw err
  }


}

module.exports = {
  createTable
}