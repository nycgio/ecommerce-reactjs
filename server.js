const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

// import middleware
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
dotenv.config()

// import the routes
const productRoute = require('./routes/productRoute')

connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('API is running')
})

// set routes
app.use('/api/products', productRoute)

// app middlewares
app.use(notFound)
app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)
