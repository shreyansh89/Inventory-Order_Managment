const Order = require('../models/Order');
const Product = require('../models/Product');

// Place an order
exports.placeOrder = async (req, res) => {
  try {
    const { products } = req.body;

    let totalAmount = 0;
    for (let product of products) {
      const prod = await Product.findById(product.productId);
      totalAmount += prod.price * product.quantity;
    }

    const newOrder = new Order({
      customerId: req.user.id,
      products,
      totalAmount
    });

    const order = await newOrder.save();
    res.json(order);
    } 
    catch (err) {
        res.status(500).send('Server error');
    }
};

// Get all orders 
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('customerId', 'name');
        res.json(orders);
    } 
    catch (err) {
        res.status(500).send('Server error');
    }
};

// Update order status (Admin)
exports.updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        if (!order) return res.status(404).json({ msg: 'Order not found' });
        res.json(order);
    } 
    catch (err) {
        res.status(500).send('Server error');
    }
};

// Get a customer's orders
exports.getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ customerId: req.user.id });
        res.json(orders);
    } 
    catch (err) {
        res.status(500).send('Server error');
    }
};