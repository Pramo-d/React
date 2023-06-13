import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React ,{useState} from "react";

const NewExpense = (props) => {
    const [isEditing,setIsEditing]= useState(false);

  const expenseDataHandler = (recievedData) => {
    const expenseData = {
      ...recievedData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
    const startEditingHandler =() =>{
      setIsEditing(true);
    };
 const stopEditinghandler=()=>{
  setIsEditing(false);
 }
  return (
    <div className="new-expense">
     {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
     {isEditing && <ExpenseForm onSaveExpenseData={expenseDataHandler} onCancel={stopEditinghandler} />}
    </div>
  );
};
export default NewExpense;
