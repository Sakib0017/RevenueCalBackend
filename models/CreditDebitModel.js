const mongoose = require('mongoose');

const creditdebitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  
});

module.exports = mongoose.model('CreditDebitModel', creditdebitSchema);