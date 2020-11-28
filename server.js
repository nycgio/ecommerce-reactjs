const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const cors = require('cors')

// import middleware
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
dotenv.config()

// import the routes
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const orderRoutes = require('./routes/orderRoute')

connectDB()

const app = express()

let whitelist = [
  'http://www.nycgio.com',
  'http://nycgio.com',
  'nycgio.com',
  'http://localhost:3000',
]

let corsOptions = {
  optionsSuccessStatus: 200,
  origin: function (origin, cb) {
    if (whitelist.indexOf(origin) !== -1) {
      cb(null, true)
    } else {
      cb(new Error('Not allowed by cors'))
    }
  },
}

app.use(cors())

// allow json data in the body
app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('API is running')
})

// set routes
app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoutes)

// app middlewares
app.use(notFound)
app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)
