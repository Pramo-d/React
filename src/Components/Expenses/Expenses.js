import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      {/* <ExpenseItem
        date={props.item[0].date}
        title={props.item[0].title}
        amount={props.item[0].amount}
      />

      <ExpenseItem
       date={props.item[1].date}
       title={props.item[1].title}
       amount={props.item[1].amount}
      />

      <ExpenseItem
       date={props.item[2].date}
       title={props.item[2].title}
       amount={props.item[2].amount}
      />

      <ExpenseItem
       date={props.item[3].date}
       title={props.item[3].title}
       amount={props.item[3].amount}
      /> */}
    </Card>
  );
};
export default Expenses;
