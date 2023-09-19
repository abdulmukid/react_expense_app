import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";

const DEFAULT_EXPENSES = [];

const App = () => {
  const [expenses, setExpenses] = useState(DEFAULT_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    //when updating specific key/value pairs in an object, we need to remember to copy in the other key/values or they will get lost
    //the spread operator takes an object and adds all its key/value pairs into the {} it is incased in - allowing overrides to happen
    //when your state depends on the previous state, use this function syntax form becuase this guarentees react to give you the latest snapshot of the previous state
    //you might be relying on ana outdated snapshot of the previous state otherwise
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
