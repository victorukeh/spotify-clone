const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const lyricsFinder = require("lyrics-finder")

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



// app.use('/', auth)
app.get("/lyrics", async (req, res) => {
  const lyrics =
    (await lyricsFinder(req.query.artist, req.query.track)) || "No Lyrics Found"
  res.json({ lyrics })
})

const PORT =  process.env.PORT || 8000
const server = app.listen(PORT, console.log(`Server running on port ${PORT}`))

//Handle Unhandled Rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err}`)
  server.close(() => process.exit(1))
})
