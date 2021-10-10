const mongoose = require("mongoose");

const expensesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = Expenses = mongoose.model("expenses", expensesSchema);
