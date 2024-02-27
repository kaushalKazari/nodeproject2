const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('./db.js')
const router = require('./routes/routes')

const app = express();

app.use(bodyParser.json())
app.use(cors('http://localhost:4200/')) // it is front end link

app.listen(3000, () =>{console.log('Server started at port 3000')})

app.use('/employee',router)
