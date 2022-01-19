const fs = require('fs')

const saveFile = (data) => {
  const path = './db/data.json'

  fs.writeFileSync(path, JSON.stringify(data))
}


module.exports = saveFile