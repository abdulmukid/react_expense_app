import ExpenseCard from "../ui/ExpenseCard";
import ExpenseDate from "./ExpenseDate";
import "../../styling/expenses/ExpenseModule.css";

const ExpenseModule = (props) => {
  return (
    <li>
      <ExpenseCard className="expense-item">
        <ExpenseDate expenseDate={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </ExpenseCard>
    </li>
  );
};

export default ExpenseModule;
