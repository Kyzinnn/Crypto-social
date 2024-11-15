const mongoose = require("mongoose");

const marketplaceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String }, // image URL
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Marketplace", marketplaceSchema);
