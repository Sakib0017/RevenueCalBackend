const express = require('express');
const Debit = require('../models/Debit');
const router = express.Router();

router.post('/', async (req, res) => {
  const {  houseRentAd, houseRent, electricBill, generatorBill, waterBill, internet, 
    practicalFee, advertizement, photocopies, affiliation, regitrationFee, boardExamFee,
    boardReadmition, salary, conveyances, printing, decoration, furniture,
    tools, entertainment, maintaince, development, cultural, miscellaneous,
    software, honorarium, loanRefund, loanReOther, cashpaid, total, createdAt
   } = req.body;
  try {
    const user = new Debit({ houseRentAd, houseRent, electricBill, generatorBill, waterBill, internet, 
      practicalFee, advertizement, photocopies, affiliation, regitrationFee, boardExamFee,
      boardReadmition, salary, conveyances, printing, decoration, furniture,
      tools, entertainment, maintaince, development, cultural, miscellaneous,
      software, honorarium, loanRefund, loanReOther, cashpaid, total, createdAt });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

  
 
router.get('/', async (req, res) => {
  try {
    const users = await Debit.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});






module.exports = router;