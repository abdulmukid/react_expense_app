import { useState } from "react";
import "../../styling/newExpense/ExpenseForm.css";

//onChange is a listener that will look out for all input types
const ExpenseForm = (props) => {
  //Instead of having 3 seperate useState hooks, we can group them into one by passing in an object to useState that will hold
  //individual keys
  const [userInput, enteredUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  //this is shared handler function, for all the different potential value updates
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      //when updating specific key/value pairs in an object, we need to remember to copy in the other key/values or they will get lost
      //the spread operator takes an object and adds all its key/value pairs into the {} it is incased in - allowing overrides to happen
      enteredUserInput((prevState) => {
        return { ...prevState, enteredTitle: value };
      });
    } else if (identifier === "amount") {
      //when your state depends on the previous state, use this function syntax form becuase this
      //guarentee react to give you the latest snapshot of the previous state
      enteredUserInput((prevState) => {
        return { ...prevState, enteredAmount: value };
      });
    } else {
      //we have to use this inner function approach as react schedules updates, so if there are many updates at teh same time
      //you might be relying on ana outdated snapshot of the previous state
      enteredUserInput((prevState) => {
        return { ...prevState, enteredDate: new Date(value)};
      });
    }
  };

  const submitHandler = (event) => {
    //the default is the reload the page once the button is pressed for the form, we dont want that
    event.preventDefault();
    //here we are triggering the listner function that hass been passed in through props to send the data back up
    props.onSubmittedExpenseItem(userInput)
    enteredUserInput((prevState) => {return {...prevState, enteredTitle: ''}})
    enteredUserInput((prevState) => {return {...prevState, enteredAmount: ''}})
    enteredUserInput((prevState) => {return {...prevState, enteredDate: ''}})
  }

  return (
    //if a button is pressed inside a form, the form itself will emit which is best to listen for
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // we are essentially binding the default value to whatever the variable is, which is set to empty after a
            value={userInput.enteredTitle}
            //since this function is passed to React through the listener prop - React ensures we get an event object when a change occures
            onChange={(event) => inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={(event) => inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={userInput.enteredDate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
