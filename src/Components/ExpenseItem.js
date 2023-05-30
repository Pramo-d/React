 import ExpenseDate from "./ExpenseDate";
 import ExpenseDetails from "./ExpenseDetails";
 import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate  date={props.date} />
      <ExpenseDetails title={props.amount}  amount={props.amount}/>
      {/* <div className="expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price"> {props.amount}</div> */}
      </div>

  );
}
export default ExpenseItem;
