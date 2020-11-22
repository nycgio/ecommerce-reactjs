const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const Product = require('../models/Product')

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    // check if product available
    if (product) {
      res.json(product)
    } else {
      // send 404 not found to response
      res.status(404).json({ success: false, message: 'Product not found' })
    }
  })
)

module.exports = router
