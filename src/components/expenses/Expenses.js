import { useState } from "react";
import "../../styling/expenses/Expenses.css";
import ExpenseModule from "./ExpenseModule";
import ExpenseCard from "../ui/ExpenseCard";
import ExpenseFilter from "./ExpenseFilter";

// destructor the incoming props paramter here to make the values more clear
// destructered value names Must match what they are being passed in as
const Expenses = ({ items }) => {
  const [filter, updatedFilter] = useState("2023");

  const filterChangeHandler = (year) => {
    updatedFilter(year);
  };

  return (
    <div>
      <ExpenseCard className="expenses">
        <ExpenseFilter selected={filter} onFilterChange={filterChangeHandler} />
        {/* the map function dynamcialy goes through the list and applies a function to the result */}
        {items.map((expense) => (
          <ExpenseModule
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ExpenseCard>
    </div>
  );
};

export default Expenses;
