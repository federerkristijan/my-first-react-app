import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Cat insurance",
      amount: 10.5,
      date: new Date(2000, 0, 1),
    },
    { id: "e2", title: "Cat food", amount: 7.7, date: new Date(2000, 0, 2) },
    {
      id: "e3",
      title: "Dog insurance",
      amount: 10.5,
      date: new Date(2000, 0, 1),
    },
    {
      id: "e4",
      title: "Dog food",
      amount: 11.5,
      date: new Date(2000, 0, 2),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
