import React, { useState } from "react";

import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [targetYear, setTargetYear] = useState('2020');

  const saveFilterHandler = selectedYear => {
    setTargetYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={targetYear} onSaveFilterData={saveFilterHandler} />
        {props.items.map((expense, index) =>
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />)
        }
      </Card>
    </div>
  );
}

export default Expenses;
