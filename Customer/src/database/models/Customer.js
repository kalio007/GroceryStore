const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    email: String,
    password: String,
    salt: String,
    phone: String,
    address: [
        { type: Schema.Types.ObjectId, ref: 'address', require: true }
    ],
    cart: [
        {
            product: {
                _id: { type: String, required: true },
                name: { type: String, required: true },
                banner: { type: String },
                price: { type: String },
            },
            unit: { type: Number, require: true }
        }
    ],
    wishlist: [
        {
            type: Schema.Types.ObjectId, ref: 'product', require: true
        }
    ],
    orders: [
        { type: Schema.Types.ObjectId, ref: 'order', require: true }
    ]
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.password;
            delete ret.salt;
            delete ret.__v;
        }
    },
    timestamps: true
});

module.exports = mongoose.model('customer', CustomerSchema);