import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";

const expenses = [
  { id: "e1", title: "New TV", amount: 1000.0, date: new Date(2023, 2, 12) },
  { id: "e2", title: "Shoes", amount: 100.0, date: new Date(2023, 5, 30) },
  { id: "e3", title: "Toilet Paper", amount: 4.0, date: new Date(2023, 2, 2) },
  { id: "e4", title: "Junk Food", amount: 30.0, date: new Date(2023, 7, 7) },
];

const App = () => {
  const addExpenseHandler = (newExpenseData) => {
    console.log("In App.js");
    console.log(newExpenseData);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
