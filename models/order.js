const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    products: [{
        productId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Product' 
        },
        quantity: { 
            type: Number, 
            required: true 
        }
    }],
    totalAmount: { 
        type: Number, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['Pending', 'Shipped', 'Delivered'], 
        default: 'Pending' 
    },
    date: { 
        type: Date, 
        default: Date.now()
    }
});

const Order =  mongoose.model('Order', orderSchema);
module.exports = Order;