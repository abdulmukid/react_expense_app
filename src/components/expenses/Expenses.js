import "../../styling/expenses/Expenses.css";
import ExpenseModule from "./ExpenseModule";
import ExpenseCard from "../ui/ExpenseCard";

const Expenses = ({ items }) => {
  return (
    <ExpenseCard className="expenses">
      <ExpenseModule
        expenseTitle={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseModule
        expenseTitle={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseModule
        expenseTitle={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenseModule
        expenseTitle={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </ExpenseCard>
  );
}

export default Expenses;
