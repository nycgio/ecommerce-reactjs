const express = require('express')
const limiter = require('express-rate-limit')

const app = express()
const port = 80

// add limit to requests
const time = 1

const limit = limiter({
  windowMs: time * 60 * 1000,
  max: 180,
  message: `Too many requests from ip please try again in ${time} ${
    time > 1 ? 'minutes' : 'minute'
  }`,
  handler: function (req, res, next) {
    let ip = req.headers['x-real-ip'] || req.connection.remoteAddress
    if (ip.substr(0, 7) === '::ffff:') {
      ip = ip.substr(7)
    }
    let customMessage = `Too many requests from ${ip} please try again in ${time} ${
      time > 1 ? 'minutes' : 'minute'
    }`
    res.send(customMessage)
  },
})

app.use(limit)
app.use(express.static('build'))

app.listen(port, () => console.log('http server running'))
