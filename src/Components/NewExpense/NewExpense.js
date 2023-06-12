import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React from "react";

const NewExpense = (props) => {
  const expenseDataHandler = (recievedData) => {
    const expenseData = {
      ...recievedData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
};
export default NewExpense;
