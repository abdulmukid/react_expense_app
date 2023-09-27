import { useState } from "react";
import "../../styling/expenses/Expenses.css";
import ExpenseCard from "../ui/ExpenseCard";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

// destructor the incoming props paramter here to make the values more clear
// destructered value names Must match what they are being passed in as
const Expenses = ({ items }) => {
  const [filter, updatedFilter] = useState("2023");

  const filterChangeHandler = (year) => {
    updatedFilter(year);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });

  return (
    <div>
      <ExpenseCard className="expenses">
        <ExpenseFilter selected={filter} onFilterChange={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </ExpenseCard>
    </div>
  );
};

export default Expenses;
