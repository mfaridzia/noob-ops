const express = require('express')
const app = express()
const pino = require('pino')()

const expressPino = require('express-pino-logger')({
  logger: pino
})

const port = process.env.PORT || 3000

app.use(expressPino)

app.get('/', (req, res) => {
  res.json({ user: 'fulana' })
})

app.listen(port, () => console.log(`App listening on port ${port}`))