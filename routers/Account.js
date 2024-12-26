const express = require('express');
const Account = require('../models/Account');
const router = express.Router();
const app = express();
app.use(express.json()); // Ensure the body is parsed

router.post('/api/save-account', async (req, res) => {
  try {
    const { accountType, accountHead, amount, status } = req.body;

    const newAccount = new Account({
      accountType,
      accountHead,
      amount,
      status,
    });

    await newAccount.save();
    res.status(201).json({ message: 'Account saved successfully', account: newAccount });
  } catch (error) {
    console.error('Error saving account:', error);
    res.status(500).json({ message: 'Error saving account', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await Account.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;