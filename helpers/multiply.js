const fs = require('fs')

const createTable = async(table = 1) => {

  try {
    let salida = ''
  
    console.clear()
    console.log('------------')
    console.log('Tabla del ' + table)
    console.log('------------')
    
    for (let i = 1; i < 11; i++) {
      let result = table*i
    
      salida += `${table} x ${i} = ${result}\n`
    }
    
    console.log(salida)
    
    fs.writeFileSync(`tabla-${table}.txt`, salida)
    console.log(`The file tabla-${table}.txt has been created!`);
  
    return `tabla-${table}.txt`
    
  } catch (err) {
    throw err
  }


}

module.exports = {
  createTable
}