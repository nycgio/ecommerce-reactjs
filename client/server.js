const express = require('express')
const http = require('http')
const https = require('https')

const app = express()
const port = 80

app.use(express.static('build'))

app.listen(port, () => console.log('http server running'))
