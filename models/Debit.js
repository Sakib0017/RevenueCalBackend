const mongoose = require('mongoose');

const debitSchema = new mongoose.Schema({
  accountType: { type: String, required: true, default: 'debit' },
  accountHead: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Debit = mongoose.model('Debit', debitSchema);

module.exports = Debit;