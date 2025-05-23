const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  spend: Number,
  visits: Number,
  lastActiveDaysAgo: Number
});

module.exports = mongoose.model('Customer', customerSchema);
