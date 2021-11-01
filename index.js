const express = require('express')
const app = express()
const port = 3000

app.get('/tin', (req, res) => {
    var a = 5
    var b = 6
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})