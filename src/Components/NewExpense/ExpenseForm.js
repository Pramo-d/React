import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [EnterTitle, setEnterTitle] = useState("");
  const [EnterAmount, setEnterAmount] = useState("");
  const [EnterDate, setEnterDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: EnterTitle,
      amount: EnterAmount,
      date: new Date(EnterDate),
    };
    props.onSaveExpenseData(ExpenseData);
    console.log(ExpenseData);

    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={EnterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={EnterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={EnterDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
