const express = require('express')

const app = express()

const port = 4000
 
app.get('/', (req, res) => {

  res.send('welcome to ICICI bank demo ')

})
 
app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)

})
