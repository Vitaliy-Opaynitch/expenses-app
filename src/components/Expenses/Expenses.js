import React, { useState } from "react";

import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [targetYear, setTargetYear] = useState('2023');

  const filteredArr = props.items.filter(item => {
    return item.date.getFullYear().toString() === targetYear;
  });

  const saveFilterHandler = selectedYear => {
    setTargetYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={targetYear} onSaveFilterData={saveFilterHandler} />
        <ExpensesChart expenses={filteredArr} />
        <ExpensesList items={filteredArr} />
      </Card>
    </div>
  );
}

export default Expenses;
