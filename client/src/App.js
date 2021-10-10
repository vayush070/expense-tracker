import { useState, useEffect } from "react";
import axios from "axios";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      const res = await axios.get("/expense");
      console.log(res.data);
      setExpenses(res.data);
    }
    // Execute the created function directly
    anyNameFunction();
  }, []);

  const saveHandler = (FillData) => {
    setExpenses((prev_expenses) => {
      return [FillData, ...prev_expenses];
    });
  };

  return (
    <div>
      <NewExpense onSave={saveHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
