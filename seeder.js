// created this seeder to import dummy data to database
const mongoose = require('mongoose')

const connectDB = require('./config/db')
const dotenv = require('dotenv')
const colors = require('colors')
const users = require('./data/users')
const products = require('./data/products')

// import models
const User = require('./models/User')
const Product = require('./models/Product')
const Order = require('./models/Order')

// load dotenv variables
dotenv.config()

// connect the db
connectDB()

// import data method
const importData = async () => {
  // lets make sure the database is empty
  try {
    await Order.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()

    // import the users from the array
    const createdUsers = await User.insertMany(users)

    // get the admin user
    const adminUser = createdUsers[0]._id

    // set all sample products to the admin user
    const sampleProducts = products.map((product) => {
      // spread everything from the product and set admin user to the product
      return { ...product, user: adminUser }
    })

    // add products to database
    await Product.insertMany(sampleProducts)

    console.log('Data Imported'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    //   exit with failure
    process.exit(1)
  }
}

// destroy data method
const deleteData = async () => {
  // lets make sure the database is empty
  try {
    await Order.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()
    console.log(`Data Deleted!`.green.underline.bold)
    //   exit with failure
    process.exit(1)
  } catch (error) {
    console.error(`${error}`.red.inverse)
    //   exit with failure
    process.exit(1)
  }
}

// make the argument to call the methods
if (process.argv[2] === '-d') {
  deleteData()
} else {
  importData()
}
