const asyncHandler = require('express-async-handler')
const User = require('../models/User')

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {})

module.exports = { authUser }
