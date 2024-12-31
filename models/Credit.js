const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema({
  accountType: { type: String, required: true, default: 'credit' },
  accountHead: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Credit = mongoose.model('Credit', creditSchema);

module.exports = Credit;