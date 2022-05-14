import ExpenseItem from "./components/ExpenseItem";

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
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
