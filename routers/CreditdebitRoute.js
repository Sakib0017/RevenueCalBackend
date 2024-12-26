const express = require('express');
const CreditDebitModel = require('../models/CreditDebitModel');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const user = new CreditDebitModel({ name });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await CreditDebitModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});





router.get('/search', async (req, res) => {
  const searchTerm = req.query.q || ''; 
  
  try {
    const users = await CreditDebitModel.find({
      name: { $regex: searchTerm, $options: 'i' } 
    }).limit(10);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;