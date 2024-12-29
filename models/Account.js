const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  accountType: { type: String, required: true },
  accountHead: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },  // Manually set the default value to current date/time
  updatedAt: { type: Date, default: Date.now },
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;