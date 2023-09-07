import ExpenseModule from "./components/ExpenseModule";

const expenses = [
  { id: "e1", title: "New TV", amount: 1000.0, date: new Date(2023, 2, 12) },
  { id: "e2", title: "Shoes", amount: 100.0, date: new Date(2023, 5, 30) },
  { id: "e3", title: "Toilet Paper", amount: 4.0, date: new Date(2023, 2, 2) },
  { id: "e4", title: "Junk Food", amount: 30.0, date: new Date(2023, 7, 7) },
];

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseModule
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseModule>
      <ExpenseModule
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseModule>
      <ExpenseModule
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseModule>
    </div>
  );
}

export default App;
