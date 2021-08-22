const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    orders: [
      {
        plan: {
          type: ObjectId,
          ref: "Plan",
        },
        service: {
          type: ObjectId,
          ref: "Services",
        },
        count: Number,
      },
    ],
    orderUser: {
      type: ObjectId,
      ref: "User",
    },
    orderStatus: {
      type: String,
      default: "Not Processed",
      enum: ["Not Processed", "processing", "Cancelled", "Completed"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);
