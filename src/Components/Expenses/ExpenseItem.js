import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
   
  const [newTitle,setNewtitle]=useState("");
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(newTitle);
  };

  const changeHandler=(event)=>{
    setNewtitle(event.target.value);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
      <input type="text" value={ newTitle} onChange={changeHandler} ></input>
      <button onClick={clickHandler}>change Expense</button>
    </Card>
  );
};

export default ExpenseItem;
