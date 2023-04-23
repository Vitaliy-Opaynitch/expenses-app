import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
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
      date: new Date(2023, 3, 12)
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
      date: new Date(2023, 4, 11)
    },
  ];

  const addExpenseHandler = expense => {
    console.log('Hello', expense);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
