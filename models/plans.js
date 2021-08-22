const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const planSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    features: [
      {
        type: ObjectId,
        ref: "Features",
        required: true,
      },
    ],
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
    },
    ratings: [
      {
        star: Number,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
    review: [
      {
        text: String,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Plan", planSchema);
