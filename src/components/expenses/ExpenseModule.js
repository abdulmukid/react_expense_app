import ExpenseCard from "../ui/ExpenseCard";
import ExpenseDate from "./ExpenseDate";
import "../../styling/expenses/ExpenseModule.css";

// destructor the incoming props paramter here to make the values more clear
// destructered value names Must match what they are being passed in as
const ExpenseModule = ({ date, title, amount }) => {
  return (
    <ExpenseCard className="expense-item">
      <ExpenseDate expenseDate={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </ExpenseCard>
  );
}

export default ExpenseModule;
