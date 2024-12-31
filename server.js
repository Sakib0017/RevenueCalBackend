const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const pdfkit = require('pdfkit');
const fs = require('fs');
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
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
app.post('/generate-pdf', (req, res) => {
  const { creditAccounts, debitAccounts } = req.body;

  // Create a new PDF document
  const doc = new pdfkit();

  // Set response header to indicate a PDF file
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');

  // Pipe the PDF document to the response object
  doc.pipe(res);

  



  // Credit Accounts Table
  doc.fontSize(14).text('Credit Accounts:', { underline: true });
  doc.moveDown();

  // Table headers for Credit Accounts
  const creditTableHeaders = [ 'Account Head', 'Amount'];
  let startY = doc.y; // Starting Y position for table

  // Draw the table header
  creditTableHeaders.forEach((header, i) => {
    doc.text(header, 50 + i * 120, startY); // Positioning columns with space in between
  });
  doc.moveDown();

  // Draw rows for Credit Accounts
  creditAccounts.forEach(account => {
    
    doc.text(account.accountHead, 50, doc.y);
    doc.text(account.amount, 180, doc.y);
    
    
  });

  // Add spacing between tables
  doc.moveDown();

  // Debit Accounts Table
  doc.fontSize(14).text('Debit Accounts:', { underline: true });
  doc.moveDown();

  // Table headers for Debit Accounts
  const debitTableHeaders = [ 'Account Head', 'Amount'];
  startY = doc.y; // Starting Y position for the debit table header

  // Draw the table header for Debit Accounts
  debitTableHeaders.forEach((header, i) => {
    doc.text(header, 50 + i * 120, startY); // Positioning columns with space in between
  });
  doc.moveDown();

  // Draw rows for Debit Accounts
  debitAccounts.forEach(account => {
    doc.text(account.accountHead, 170, doc.y);
    doc.text(account.amount, 290, doc.y);
    doc.moveDown();
  });

  // Add Total Calculations at the end of the document
  const totalCredit = creditAccounts.reduce((total, account) => total + parseFloat(account.amount || 0), 0).toFixed(2);
  const totalDebit = debitAccounts.reduce((total, account) => total + parseFloat(account.amount || 0), 0).toFixed(2);
  const profit = (parseFloat(totalCredit) - parseFloat(totalDebit)).toFixed(2);

  doc.moveDown();
  doc.fontSize(12).text(`Total Credit: ${totalCredit}`);
  doc.text(`Total Debit: ${totalDebit}`);
  doc.text(`Profit: ${profit}`);

  // Finalize the PDF document
  doc.end();
});

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
app.use('/api/accounts/:id', Account);
app.use('/api/account/:id', Account);
app.use('/api/save-accounts/:id', Account);
app.use('/api/current-date', Account);
app.use('/api/calculate-totals', Account);
const Total = require('./routers/Total');
app.use('/api/totals', Total);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});