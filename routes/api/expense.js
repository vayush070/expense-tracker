const express = require("express");
const router = express.Router();
const Expenses = require("../../models/expense");

//add expense
router.post("/", async (req, res) => {
  const { title, price, date } = req.body;
  try {
    let expense = new Expenses({
      title,
      price,
      date,
    });

    await expense.save();
    res.json(expense);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

//get all expense
router.get("/", async (req, res) => {
  try {
    const expenses = await Expenses.find();
    res.json(expenses);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
