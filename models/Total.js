const mongoose = require('mongoose');

const TotalsSchema = new mongoose.Schema({
  totalCredit: { type: Number, required: true },
  totalDebit: { type: Number, required: true },
  profit: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Total', TotalsSchema);