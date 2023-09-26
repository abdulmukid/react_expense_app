import ExpenseModule from "./ExpenseModule";
import "../../styling/expenses/ExpenseList.css";

const ExpenseList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">'No expenses found'</h2>;
  }

  return (
    <ul className="expenses-list">
      {/* the map function dynamcialy goes through the list and applies a function to the result */}
      {expenses.length > 0 &&
        expenses.map((expense) => (
          <ExpenseModule
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </ul>
  );
};

export default ExpenseList;
