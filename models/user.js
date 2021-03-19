const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: 'subscriber',
    },
    cart: {
      type: Array,
      default: [],
    },
    info: [
      { country: String },
      { city: String },
      { phone: String },
      { birthdate: Date },
      { gender: { type: String, enum: ['Male', 'Female'] } },
    ],
    //   wishlist: [{ type: ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
