const express = require('express');
const Credit = require('../models/Credit');
const router = express.Router();

router.post('/', async (req, res) => {
  const { balance, admission, semester, shortCourse, examFee, refferedEFee, 
    practicalFe, readmissionFee, loanFromDM, loanFromOther, miscellaneou, cashRecieedDM, total, createdAt
   } = req.body;
  try {
    const user = new Credit({ balance, admission, semester, shortCourse, examFee, refferedEFee, 
      practicalFe, readmissionFee, loanFromDM, loanFromOther, miscellaneou, cashRecieedDM, total, createdAt });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

  
 
router.get('/', async (req, res) => {
  try {
    const users = await Credit.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});






module.exports = router;