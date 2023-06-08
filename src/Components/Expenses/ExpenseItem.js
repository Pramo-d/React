import ExpenseDate from "./ExpenseDate";
import React from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const title=props.title;
  const clickHandler=()=>{
       title='update';
        console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;
