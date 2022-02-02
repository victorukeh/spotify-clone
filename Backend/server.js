const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')

dotenv.config({
  path: './config/config.env',
})

const app = express()

//Body Parser
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// Cors
app.use(cors())

// Cookie parser
app.use(cookieParser())

// const auth = require('./routers/auth')

// app.use('/', auth)
app.get('/', (req, res) => {    
  res.json({message: 'Hello from express'})
})
require('./routers/gateway')(app)
const PORT =  process.env.PORT || 8000
const server = app.listen(PORT, console.log(`Server running on port ${PORT}`))

//Handle Unhandled Rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err}`)
  server.close(() => process.exit(1))
})
