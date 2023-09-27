import { useState } from "react";
import "../../styling/newExpense/ExpenseForm.css";
import NewExpense from "./NewExpense";

//onChange is a listener that will look out for all input types
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //this is shared handler function, for all the different potential value updates
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  };

  const submitHandler = (event) => {
    //the default is the reload the page once the button is pressed for the form, we dont want that
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    //here we are triggering the listener function that has been passed in through props to send the data back up
    props.onSubmittedExpenseItem(expenseData);
    //reset the values to get rid of the entered values after submission
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onCloseNewExpenseForm();
  };

  return (
    //if a button is pressed inside a form, the form itself will emit which is best to listen for
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // we are essentially binding the default value to whatever the variable is, which is set to empty after a
            value={enteredTitle}
            //since this function is passed to React through the listener prop - React ensures we get an event object when a change occures
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCloseNewExpenseForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
