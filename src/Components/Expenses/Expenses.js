import './Expenses.css';
import React ,{useState}from "react";
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses=(props)=> {

  const[filterYear,setFilterYear]=useState('2020');

  const filterChangeHandler= selectedYear=>{
    setFilterYear(selectedYear)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>

{
   props.item.map( expense =>(
    <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
   ))
}
  
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
}
export default Expenses;
