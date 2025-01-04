const mongoose = require('mongoose');

const debitSchema = new mongoose.Schema({
  
  houseRentAd: { type: String, default:0 },
  houseRent : { type: String, default:0 },
  electricBill: { type: String, default:0 },
  generatorBill: { type: String, default:0 },
  waterBill: { type: String, default:0 },
  internet: { type: String, default:0 },
  practicalFee: { type: String, default:0 },
  advertizement: { type: String, default:0 },
  photocopies: { type: String, default:0 },
  affiliation: { type: String, default:0 },
  regitrationFee: { type: String, default:0 },
  boardExamFee: { type: String, default:0 },
  boardReadmition: { type: String, default:0 },
  salary : { type: String, default:0 },
  conveyances: { type: String, default:0 },
  printing: { type: String, default:0 },
  decoration: { type: String, default:0 },
  furniture: { type: String, default:0 },
  tools: { type: String, default:0 },
  entertainment: { type: String, default:0 },
  maintaince: { type: String, default:0 },
  development: { type: String, default:0 },
  cultural: { type: String, default:0 },
  miscellaneous: { type: String, default:0 },
  software: { type: String, default:0 },
  honorarium: { type: String, default:0 },
  loanRefund: { type: String, default:0 },
  loanReOther: { type: String, default:0 },
  cashpaid: { type: String, default:0 },
  total: { type: String, default:0 },
  createdAt: { type: Date, default: Date.now },  
  updatedAt: { type: Date, default: Date.now },
});



module.exports = mongoose.model('DebitModel', debitSchema);