import "../../styling/newExpense/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveNewExpenseDataHandler = (submittedExpenseData) => {
    const savedExpenseData = {
      ...submittedExpenseData, 
      id: Math.random().toString()     
    };
    props.onAddExpense(savedExpenseData);
  };

  return (
    <div className="new-expense">
      {/* we create a custom listener function for our component in order to move data up from the child component */}
      {/* this is esxactly how default listeners do this, only React trigger this fucntion in the child component for us depending on what trigger we state */}
      <ExpenseForm onSubmittedExpenseItem={saveNewExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
