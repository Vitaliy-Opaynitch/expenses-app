import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props) {
  const onSaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  return <div className="new-expense">
    <ExpenseForm onSaveExpense={onSaveExpenseHandler} />
  </div>
}

export default NewExpense;
