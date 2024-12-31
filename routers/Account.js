const express = require('express');
const Account = require('../models/Account');
const router = express.Router();
const app = express();

app.use(express.json()); // Ensure the body is parsed
router.get('/api/current-date', (req, res) => {
  const currentDate = new Date();
  res.json({ date: currentDate });
});



router.get('/api/calculate-totals', async (req, res) => {
  try {
    const accounts = await Account.find();
    
    // Separate accounts into credit and debit
    const creditAccounts = accounts.filter(account => account.accountType === 'Credit');
    const debitAccounts = accounts.filter(account => account.accountType === 'Debit');

    // Calculate totals
    const totalCredit = creditAccounts.reduce((total, account) => total + parseFloat(account.amount), 0).toFixed(2);
    const totalDebit = debitAccounts.reduce((total, account) => total + parseFloat(account.amount), 0).toFixed(2);

    // Calculate profit (Credit - Debit)
    const profit = (parseFloat(totalCredit) - parseFloat(totalDebit)).toFixed(2);

    res.status(200).json({
      totalCredit,
      totalDebit,
      profit
    });
  } catch (error) {
    res.status(500).json({ error: 'Error calculating totals' });
  }
});
router.get('/api/account/:id',  (req, res) => {
  const id = req.params.id;
  
    Account.findById({_id:id})
    .then(accounts => res.json(accounts))
    .catch(err => res.json(err))
});

router.put('/api/save-accounts/:id', async (req, res) => {
  const id = req.params.id;
  
  Account.findByIdAndUpdate({_id:id}, {accountType:req.body.accountType,accountHead:req.body.accountHead,amount:req.body.amount, status:req.body.status})
  .then(accounts => res.json(accounts))
  .catch(err => res.json(err))
});
router.delete('/api/accounts/:id',  (req, res) => {
  const id = req.params.id;
  
    Account.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
});
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