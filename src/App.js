import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: 1,
    title: 'Bread',
    amount: 1.3,
    date: new Date(2023, 4, 10)
  },
  {
    id: 2,
    title: 'Pencil',
    amount: 1,
    date: new Date(2021, 3, 12)
  },
  {
    id: 3,
    title: 'Pen',
    amount: 1,
    date: new Date(2023, 4, 19)
  },
  {
    id: 4,
    title: 'Milk',
    amount: 1.8,
    date: new Date(2022, 4, 11)
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
