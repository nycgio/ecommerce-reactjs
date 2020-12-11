const express = require('express')
const router = express.Router()
const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
} = require('../controllers/userController')
const { protectRoute, admin } = require('../middleware/authMiddleware')

router.route('/').post(registerUser).get(protectRoute, admin, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile)

module.exports = router
