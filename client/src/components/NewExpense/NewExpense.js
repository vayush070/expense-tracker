import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import axios from "axios";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveDataHandler = async (enteredExpenseData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(enteredExpenseData);
    const ress = await axios.post("/expense", enteredExpenseData, config);
    // console.log(ress);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSave(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveData={saveDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
