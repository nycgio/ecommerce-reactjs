const express = require('express')
const router = express.Router()
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getOrders,
} = require('../controllers/orderController')
const { protectRoute } = require('../middleware/authMiddleware')

router.route('/').post(protectRoute, addOrderItems)
router.route('/myorders').get(protectRoute, getOrders)
router.route('/:id').get(protectRoute, getOrderById)
router.route('/:id/pay').put(protectRoute, updateOrderToPaid)

module.exports = router
