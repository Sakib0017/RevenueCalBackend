const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello from MERN backend!');
});
const TypeRoute = require('./routers/TypeRoute');
app.use('/api/type', TypeRoute);
const CreditdebitRoute = require('./routers/CreditdebitRoute');
app.use('/api/credit', CreditdebitRoute);
const Account = require('./routers/Account');
app.use(Account);
app.use('/api/accounts', Account);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});