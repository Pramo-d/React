import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "ev1",
      date: new Date(2022, 4, 5),
      title: "Car Insurance",
      amount: 300,
    },

    {
      id: "ev2",
      date: new Date(2022, 4, 6),
      title: "Bike Insurance",
      amount: 400,
    },
    {
      id: "ev3",
      date: new Date(2022, 4, 7),
      title: "Life Insurance",
      amount: 500,
    },
    {
      id: "ev4",
      date: new Date(2022, 4, 8),
      title: "Laptop Insurance",
      amount: 600,
    },
  ];

  var expenseDiv = [];

  for (let i = 0; i < expenses.length; i++) {
    for (let j = 0; j < 25; j++) {
      expenseDiv.push(expenses[i]);
    }
  }

  return (
    <div>
      {expenseDiv
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .map((a) => {
          return (
            <ExpenseItem
              expD={a.date}
              expT={a.title}
              expA={a.amount}
            ></ExpenseItem>
          );
        })}
    </div>
  );
}

export default App;
