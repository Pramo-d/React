import Expenses from "./Components/Expenses/Expenses";
import React,{useState} from "react";
import NewExpense from "./Components/NewExpense/NewExpense";

let DUMMY__EXPENSE= [
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

const App = () => {
  const [expenses,setExpenses] = useState(DUMMY__EXPENSE);
  const onAddExpenseHandler = (expense) => {
   // console.log(expense);
   const updateExpense=[expense,...expenses]
    setExpenses( updateExpense);
  };
  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
