const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema({
  balance: { type: String, default:0 },
  admission : { type: String, default:0 },
  semester: { type: String, default:0 },
  shortCourse: { type: String, default:0 },
  examFee: { type: String, default:0 },
  refferedEFee: { type: String, default:0 },
  practicalFee: { type: String, default:0 },
  readmissionFee: { type: String, default:0 },
  loanFromDM: { type: String, default:0 },
  loanFromOther: { type: String, default:0 },
  miscellaneous: { type: String, default:0 },
  cashRecieedDM: { type: String, default:0 },
  total: { type: String, default:0 },
  createdAt: { type: Date, default: Date.now },  
  updatedAt: { type: Date, default: Date.now },
 
});



module.exports = mongoose.model('CreditModel', creditSchema);