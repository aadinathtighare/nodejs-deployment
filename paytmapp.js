const express = require('express')

const app = express()

const port = 3001
 
app.get('/', (req, res) => {

  res.send('welcome to PAYTM paytm app demo ')

})
 
app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)

})
