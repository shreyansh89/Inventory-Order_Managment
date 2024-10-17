const express = require('express');

const router = express.Router();

const productcontroller = require('../controllers/productcontroller');

const auth = require('../middleware/auth');

const adminAuth = require('../middleware/adminAuth');


router.post('/createProduct', auth, adminAuth, productcontroller.createProduct);
router.get('/getAllProducts', productcontroller.getAllProducts);
router.get('/getProduct/:id', productcontroller.getProduct);
router.put('/updateProduct/:id', auth, adminAuth, productcontroller.updateProduct);
router.delete('/deleteProduct/:id', auth, adminAuth, productcontroller.deleteProduct);

module.exports = router;