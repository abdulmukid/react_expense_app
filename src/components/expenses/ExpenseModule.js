import ExpenseCard from "../ui/ExpenseCard";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "../../styling/expenses/ExpenseModule.css";

const ExpenseModule = (props) => {
  return (
    <ExpenseCard className="expense-item">
      <ExpenseDate expenseDate={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </ExpenseCard>
  );
};

export default ExpenseModule;
