const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const planSchema = new mongoose.Schema(
  {
    planTitle: { type: String, required: true, index: true },
    planFeatures: {
      type: Array,
      required: true,
      default: [],
    },
    planPrice: {
      type: String,
      required: true,
    },
    ratings: [
      {
        star: Number,
        postedBy: { type: ObjectId, ref: 'User' },
      },
    ],
    review: [
      {
        text: String,
        postedBy: { type: ObjectId, ref: 'User' },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model('Plan', planSchema);
