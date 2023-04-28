import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  }

  const hideFormHandler = () => {
    setShowForm(false);
  }

  const onSaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setShowForm(false);
  }

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler} className="new-expense-button">Add expense</button>}
      {showForm && <ExpenseForm onSaveExpense={onSaveExpenseHandler} onCancel={hideFormHandler} />}
    </div>
  )
}

export default NewExpense;
