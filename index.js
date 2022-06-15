const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use('/static', express.static('static'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  process.stdout.write(`K8s demo app listening on port ${port}...`)
})
