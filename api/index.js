const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const db = require('./db')



// middle
const cors = require('cors')

const PORT = process.env.PORT

// Use Middle
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// Routes
const products = require('./routes/products')

// schema
const read = require('./helpers/reader')
const payload = read(path.resolve(__dirname, 'db//schema/create.sql'))
app.get('/api/debug/reset', (request, response) => {
  db.query(payload).then(res => {
    console.log('db reset')
    response.status(200).send('db reset')
  })
})



// login / register && assign jwt
app.use('/api', products(db))




app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})