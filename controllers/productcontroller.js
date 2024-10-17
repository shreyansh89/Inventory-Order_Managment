const Product = require('../models/Product');

// Create a product (Admin only)
exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const product = await newProduct.save();
        res.json(product);
    } 
    catch (err) {
        res.status(500).send('Server error');
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } 
    catch (err) {
        res.status(500).send('Server error');
    }
};

// Get a single product 
exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });
        res.json(product);
    } 
    catch (err) {
        res.status(500).send('Server error');
    }
};

// Update a product (Admin only)
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ msg: 'Product not found' });
        res.json(updatedProduct);
    } 
    catch (err) {
        res.status(500).send('Server error');
    }
};

// Delete a product (Admin only)
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });
        res.json({ msg: 'Product deleted' });
    } 
    catch (err) {
        res.status(500).send('Server error');
    }
};
