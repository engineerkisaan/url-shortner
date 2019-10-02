require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const connectDB = require('./config/db')

const app = express();

app.use(cors())

connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.use(morgan('dev'))

app.use('/', require('./route/index'));
app.use('/api/v1/url', require('./route/url'));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server has started at ${PORT} PORT ...\nthe api url is http://0.0.0.0:${PORT}/api/v1`)
})