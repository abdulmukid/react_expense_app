import ExpenseModule from "./components/ExpenseModule";
import Expenses from "./components/Expenses";

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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
