const express = require('express');

const router = express.Router();

const orderController = require('../controllers/ordercontroller');

const auth = require('../middleware/auth');

const adminAuth = require('../middleware/adminAuth');


router.post('/placeOrder', auth, orderController.placeOrder);
router.get('/getOrders', auth, adminAuth, orderController.getOrders);
router.get('/my-orders', auth, orderController.getMyOrders);
router.put('/updateOrderStatus/:id', auth, adminAuth, orderController.updateOrderStatus);

module.exports = router;