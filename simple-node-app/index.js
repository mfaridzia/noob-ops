const http = require('http')

http.createServer((req, res) => {
  res.write("Hello World!")
  res.end()
})
  .listen(8000)

console.log("Server running....")
