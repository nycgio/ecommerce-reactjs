const express = require('express')
const router = express.Router()
const { authUser, getUserProfile } = require('../controllers/userController')
const { protectRoute } = require('../middleware/authMiddleware')

router.post('/login', authUser)
router.route('/profile').get(protectRoute, getUserProfile)

module.exports = router
