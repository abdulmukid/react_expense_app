import ExpenseCard from "../ui/ExpenseCard";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "../../styling/expenses/ExpenseModule.css";

// destructor the incoming props paramter here to make the values more clear
// destructered value names Must match what they are being passed in as
const ExpenseModule = ({ date, expenseTitle, amount }) => {
  //useState is a hook that is used to trigger the React DOM to refresh the component
  const [title, setTitle] = useState(expenseTitle);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <ExpenseCard className="expense-item">
      <ExpenseDate expenseDate={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>click here</button>
    </ExpenseCard>
  );
};

export default ExpenseModule;
