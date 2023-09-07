import "./Expenses.css";
import ExpenseModule from "./ExpenseModule";

function Expenses({ items }) {
  return (
    <div className="expenses">
      <ExpenseModule
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseModule
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseModule
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenseModule
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </div>
  );
}

export default Expenses;
