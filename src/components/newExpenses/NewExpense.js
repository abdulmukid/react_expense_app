import { useState } from "react";
import "../../styling/newExpense/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [newExpenseFormVisibility, updateNewExpenseFormVisibility] =
    useState(false);
  const saveNewExpenseDataHandler = (submittedExpenseData) => {
    const savedExpenseData = {
      ...submittedExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(savedExpenseData);
  };

  const showFormHandler = (value) => {
    updateNewExpenseFormVisibility(value);
  };

  return (
    <div className="new-expense">
      {/* to pass a value through an onclick event, use the event to create an anon function that calls another function */}
      {!newExpenseFormVisibility && (        
        <button onClick={() => showFormHandler(true)}>Add New Expense</button>
      )}
      {/* we create a custom listener function for our component in order to move data up from the child component */}
      {/* this is esxactly how default listeners do this, only React trigger this fucntion in the child component for us depending on what trigger we state */}
      {newExpenseFormVisibility && (
        <ExpenseForm
          onSubmittedExpenseItem={saveNewExpenseDataHandler}
          onCloseNewExpenseForm={() => showFormHandler(false)}
        />
      )}
    </div>
  );
};

export default NewExpense;
