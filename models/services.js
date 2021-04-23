const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const servicesSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Services', servicesSchema);
