const express = require('express');
const Total = require('../models/Total');
const router = express.Router();

router.post('/save-totals', async (req, res) => {
  try {
    const { totalCredit, totalDebit, profit } = req.body;

    const newTotal = new Total({
      totalCredit,
      totalDebit,
      profit,
    });

    const savedTotal = await newTotal.save();
    res.status(201).json(savedTotal);
  } catch (error) {
    res.status(500).json({ message: 'Error saving totals', error });
  }
});

router.get('/get-totals', async (req, res) => {
  try {
    const totals = await Total.find().sort({ date: -1 });
    res.status(200).json(totals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching totals', error });
  }
});


module.exports = router;