const express = require('express');
const mongoose = require('mongoose');
const app = express();
const DashboardModel = require('../models/DashboardModel');
const router = express.Router();

app.use(express.json()); // Middleware to parse JSON request bodies

// Route to get all schools
router.get('/', async (req, res) => {
  try {
    const schools = await DashboardModel.find();
    res.json(schools);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Route to get a specific school by ID

// Route to create a new school
router.post('/', async (req, res) => {
  try {
    const {balance, admission, semester, shortCourse, examFee, refferedEFee, 
        practicalFe, readmissionFee, loanFromDM, loanFromOther, miscellaneou, cashRecieedDM, totalCredit, createdAt,
         houseRentAd, houseRent, electricBill, generatorBill, waterBill, internet, 
    practicalFee, advertizement, photocopies, affiliation, regitrationFee, boardExamFee,
    boardReadmition, salary, conveyances, printing, decoration, furniture,
    tools, entertainment, maintaince, development, cultural, miscellaneous,
    software, honorarium, loanRefund, loanReOther, cashpaid, totalDebit, date } = req.body;
    
    const newDashboard = new DashboardModel({
        balance, admission, semester, shortCourse, examFee, refferedEFee, 
        practicalFe, readmissionFee, loanFromDM, loanFromOther, miscellaneou, cashRecieedDM, totalCredit, createdAt,
         houseRentAd, houseRent, electricBill, generatorBill, waterBill, internet, 
    practicalFee, advertizement, photocopies, affiliation, regitrationFee, boardExamFee,
    boardReadmition, salary, conveyances, printing, decoration, furniture,
    tools, entertainment, maintaince, development, cultural, miscellaneous,
    software, honorarium, loanRefund, loanReOther, cashpaid, totalDebit, date 
    });

    const savedSchool = await DashboardModel.save();
    res.status(201).json(newDashboard);
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;
// Route to update a school by ID
