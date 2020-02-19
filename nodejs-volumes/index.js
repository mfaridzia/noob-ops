const fs = require('fs').promises
const path = require('path')

const dataPath = path.join(process.env.DATA_PATH || "./data.txt")

const writeTo = data => {
  fs.writeFile(dataPath, data.toString())
    .catch(e => console.log(e))
}

fs.readFile(dataPath)
  .then(dataBuffer => {
    const data = dataBuffer.toString()
    console.log(data)
    writeTo(+data + 1)
  })
  .catch(error => {
    console.log("File not found, writing '0' to a new file")
    writeTo(0)
  })