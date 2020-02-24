// const
//     express = require('express'),
//     serveStatic = require('serve-static'),
//     history = require('connect-history-api-fallback'),
//     port = process.env.PORT || 5000
//
// const app = express()
//
// app.use(history())
// app.use(serveStatic(__dirname + '/dist/spa'))
// app.listen(port)

const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist/spa')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/spa/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)
console.log(`app is listening on port: ${port}`)