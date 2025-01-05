const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creditSchema = new Schema({
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
    totalCredit: { type: String, default:0 },
    createdAt: { type: Date, default: Date.now },  
    updatedAt: { type: Date, default: Date.now },
});

const debitSchema = new Schema({
   
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
    totalDebit: { type: String, default:0 },
    date: { type: Date, default: Date.now },  
    updatedAt: { type: Date, default: Date.now },
});


const dashboardSchema = new Schema({
  
  credit: [creditSchema],
  debit:[debitSchema]

});

// Create the model
const dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = dashboard;