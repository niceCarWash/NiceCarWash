const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    orderPlan: { type: ObjectId, ref: 'Plan', required: true },
    orderService: { type: ObjectId, ref: 'Services', required: true },
    orderUser: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Order', orderSchema);
