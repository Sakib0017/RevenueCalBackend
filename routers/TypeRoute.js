const express = require('express');
const TypeModel = require('../models/TypeModel');
const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const user = new TypeModel({ name });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await TypeModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/search', async (req, res) => {
  const searchTerm = req.query.q || ''; 
  
  try {
    const users = await TypeModel.find({
      name: { $regex: searchTerm, $options: 'i' } 
    }).limit(10);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;